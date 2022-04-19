/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-shadow */
/* eslint-disable guard-for-in */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import searchServices from '../services/search.service';
import { Trip, User, Location } from '../database/models';
import { Op, Sequelize } from 'sequelize';

class searchController {
  async singleSearch(req, res) {
    try {
      const trips = [];
      function TripObj(id, acc) {
        /* istanbul ignore next */

        this.id = id;
        this.accommodation = acc;
      }
      // ///// finding trips and looping into them to get accommodations

      const dat = await Trip.findAll({
        where: {
          [Op.or]: {
            user_id: req.user.id,
            manager_id: req.user.id
          }
        }
      });

      const arr = [];
      let data;

      const keys = Object.keys(req.query);

      if (keys.length === 0) {
        data = await searchServices.noQuery(req.user);
        if (data.length < 1)
          return res
            .status(400)
            .json({ message: 'oops! seems like there are no trips yet' });
      }

      const queries = [];

      const owners = await User.findAll({
        where: {
          [Op.or]: {
            first_name: {
              [Op.like]: `%${req.query.owner}%`
            },

            last_name: {
              [Op.like]: `%${req.query.owner}%`
            }
          }
        }
      });
      const ownerId = owners.map((owner) => owner.id);

      for (const by in req.query) {
        let query = req.query[by];

        if (req.query.from === undefined && req.query.to === undefined) {
          req.query.from = new Date('5000-10-10');
          req.query.to = new Date('5000-10-10');
        }

        if (by === 'duration' || by === 'endDate') {
          query = +query;
          queries.push({
            tripDate: { [Op.gte]: req.query.duration },
            returnDate: { [Op.lte]: req.query.endDate }
          });
        } else if (by === 'owner') {
          queries.push({ user_id: { [Op.in]: ownerId } });
        } else if (by === 'destination') {
          const loc = req.query.destination.toLowerCase();
          const location = await Location.findOne({
            where: {
              name: {
                [Op.like]: `%${loc}%`
              }
            }
          });

          for (let i = 0; i <= dat.length - 1; i++) {
            /* istanbul ignore next */
            if (dat[i].arrival_location) {
              /* istanbul ignore next */
              for (let b = 0; b <= dat[i].arrival_location.length; b++) {
                if (dat[i].arrival_location[b]) {
                  /* istanbul ignore next */
                  const dt = new TripObj(
                    dat[i].id,
                    dat[i].arrival_location[b].accommodation_id
                  );
                  trips.push(dt);
                }
              }
            }
          }

          for (let k = 0; k <= trips.length - 1; k++) {
            /* istanbul ignore next */
            if (trips[k].accommodation === location.dataValues.id) {
              /* istanbul ignore next */
              arr.push(trips[k].id);
            }
          }

          queries.push({ id: { [Op.in]: arr } });
        } else {
          const cas = req.query.status.toUpperCase();
          queries.push({
            status: Sequelize.literal(`"status"::TEXT LIKE '%${cas}%'`)
          });
        }
      }

      const userId = req.user.id;

      if (req.user.Role.id === 3 || req.user.Role.id === 4) {
        data = await Trip.findAll({
          where: {
            [Op.and]: queries,
            [Op.or]: [{ user_id: userId }, { manager_id: userId }]
          }
        });
        if (data.length < 1)
          return res.status(400).json({ message: 'no data found' });
        return res.status(200).json(data);
      }

      data = await Trip.findAll({
        where: {
          [Op.and]: queries
        }
      });

      if (data.length < 1)
        return res.status(400).json({ message: 'no data found' });

      return res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default searchController;
