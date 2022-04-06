import events from 'events';
import accommodationService from './accommodations.service';
import locationService from './location.service';

const eventEmitter = new events.EventEmitter();
/* istanbul ignore next */
eventEmitter.on('tripRequestApproved', async (arrival_location) => {
  arrival_location.forEach(async (acc) => {
    const id = acc.accommodation_id;
    const accommodation = await accommodationService.findSpecificAccommodation(
      id
    );
    const { location_id } = accommodation.dataValues;
    const location = await locationService.findLocation(location_id);
    const { visitCount } = location;
    await locationService.findAndUpdateLocation(
      { where: { id: location_id } },
      { visitCount: visitCount + 1 }
    );
  });
});

export default eventEmitter;
