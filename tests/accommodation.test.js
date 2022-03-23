import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import 'dotenv/config';
import path from 'path';
import app from '../src/app';
import accommodationService from '../src/services/accommodations.service';
import accommodatonData from './mock/accommodation.mock';

chai.use(chaiHttp);

const { createAccommodation } = accommodationService;

describe('ACCOMMODATION ENDPOINT TESTING', () => {
  // eslint-disable-next-line no-unused-vars
  let travelToken;
  before(async () => {
    const res = await chai.request(app).post('/api/v1/users/login').send({
      email: `TRAVEL_ADMIN@gmail.com`,
      password: 'TRAVEL_ADMIN2gmail'
    });

    travelToken = res.body.token;
  });

  it('should like an accomodation when logged in', async () => {
    const res = await chai
      .request(app)
      .post('/api/v1/accommodations/1/like')
      .set('authorization', `Bearer ${travelToken}`);
    expect(res.status).to.equal(200);
    expect(res.body.data.like).to.equal(true);
  });

  it('should remove like on an accomodation when logged in', async () => {
    const res = await chai
      .request(app)
      .post('/api/v1/accommodations/1/like')
      .set('authorization', `Bearer ${travelToken}`);
    expect(res.status).to.equal(200);
    expect(res.body.data.like).to.equal(null);
  });

  it('should add like on an accomodation if previouslly removed it when logged in', async () => {
    const res = await chai
      .request(app)
      .post('/api/v1/accommodations/1/like')
      .set('authorization', `Bearer ${travelToken}`);
    expect(res.status).to.equal(200);
    expect(res.body.data.like).to.equal(true);
  });

  it('should not like an accomodation if not exist', async () => {
    const res = await chai
      .request(app)
      .post('/api/v1/accommodations/100000/unlike')
      .set('authorization', `Bearer ${travelToken}`);
    expect(res.status).to.equal(404);
  });

  it('should not create an accommodation if user not logged in', async () => {
    const res = await chai
      .request(app)
      .post('/api/v1/accommodations')
      .set('Content-Type', 'multipart/form-data')
      .field('name', 'Mariot Hotel')
      .field(
        'description',
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying .'
      )
      .field('location', 'Kigal-Rwanda')
      .field('latitude', '232436458765')
      .field('longitude', '45678998765')
      .field('services', ['restaurant', 'breakfast', 'gym', 'swimming pool'])
      .field('amenities', ['restaurant', 'breakfast', 'gym', 'swimming pool'])
      .field('user_id', 1)
      .attach(
        'image',
        path.join(__dirname, 'weatherApp.PNG'),
        'weatherApp.png'
      );
    expect(res.status).to.be.equal(403);
  });

  it('should not create an accommodation if loggedIn user is not a travel admin', async () => {
    const logIn = await chai.request(app).post('/api/v1/users/login').send({
      email: 'REQUESTER@gmail.com',
      password: 'REQUESTER2gmail'
    });
    const data = {
      token: `Bearer ${logIn.body.token}`
    };
    const res = await chai
      .request(app)
      .post('/api/v1/accommodations')
      .set('Authorization', data.token)
      .send({
        name: 'Marriot Hotel',
        description:
          'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying .',
        location_id: 1,
        services: ['restaurant', 'breakfast', 'gym', 'swimming pool'],
        amenities: ['restaurant', 'breakfast', 'gym', 'swimming pool'],
        images: [
          'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        ]
      });
    expect(res.status).to.be.equal(403);
  });

  it('should not  create an accommodation if there is a field missing', async () => {
    const logIn = await chai.request(app).post('/api/v1/users/login').send({
      email: 'TRAVEL_ADMIN@gmail.com',
      password: 'TRAVEL_ADMIN2gmail'
    });
    const data = {
      token: `Bearer ${logIn.body.token}`
    };
    const res = await chai
      .request(app)
      .post('/api/v1/accommodations')
      .set('Authorization', data.token)
      .send({
        name: '',
        description:
          'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying .',
        location_id: 1,
        services: ['restaurant', 'breakfast', 'gym', 'swimming pool'],
        amenities: ['restaurant', 'breakfast', 'gym', 'swimming pool'],
        images: [
          'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        ]
      });
    expect(res.status).to.be.equal(400);
  });

  it('should not create an accommodation if location Id are the same and accommodation name', async () => {
    const logIn = await chai.request(app).post('/api/v1/users/login').send({
      email: 'TRAVEL_ADMIN@gmail.com',
      password: 'TRAVEL_ADMIN2gmail'
    });
    const data = {
      token: `Bearer ${logIn.body.token}`
    };
    await chai
      .request(app)
      .post('/api/v1/accommodations')
      .set('Authorization', data.token)
      .send({
        name: 'Marriot Hotel',
        description:
          'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying .',
        location_id: 1,
        services: ['restaurant', 'breakfast', 'gym', 'swimming pool'],
        amenities: ['restaurant', 'breakfast', 'gym', 'swimming pool'],
        images: [
          'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        ]
      });
    const res = await chai
      .request(app)
      .post('/api/v1/accommodations')
      .set('Authorization', data.token)
      .send({
        name: 'Marriot Hotel',
        description:
          'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying .',
        location_id: 1,
        services: ['restaurant', 'breakfast', 'gym', 'swimming pool'],
        amenities: ['restaurant', 'breakfast', 'gym', 'swimming pool'],
        images: [
          'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        ]
      });
    expect(res.status).to.be.equal(400);
  });

  it('should create an accommodation', async () => {
    const logIn = await chai.request(app).post('/api/v1/users/login').send({
      email: 'TRAVEL_ADMIN@gmail.com',
      password: 'TRAVEL_ADMIN2gmail'
    });
    const data = {
      token: `Bearer ${logIn.body.token}`
    };
    await chai.request(app).get('/api/v1/accommodations');
    const res = await chai
      .request(app)
      .post('/api/v1/accommodations')
      .set('Authorization', data.token)
      .send({
        name: 'Marriot Hotel',
        description:
          'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying .',
        location_id: 12,
        services: ['restaurant', 'breakfast', 'gym', 'swimming pool'],
        amenities: ['restaurant', 'breakfast', 'gym', 'swimming pool'],
        images: [
          'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        ],
        imagesId: ['456780rty']
      });
    expect(res.status).to.be.equal(200);
  });

  it('should find all accommodations', async () => {
    const accommodations = await createAccommodation(accommodatonData);
    accommodations.save();
    const res = await chai.request(app).get('/api/v1/accommodations');
    expect(res.status).to.be.equal(200);
  });

  it('should get a specific accommodation', async () => {
    const accommodations = await createAccommodation(accommodatonData);
    accommodations.save();
    const res = await chai
      .request(app)
      .get(`/api/v1/accommodations/${accommodations.dataValues.id}`);
    expect(res.status).to.be.equal(200);
  });

  it('should not update an accommodation if user not logged in', async () => {
    const res = await chai
      .request(app)
      .post('/api/v1/accommodations')
      .set('Content-Type', 'multipart/form-data')
      .field('name', 'Mariot Hotel')
      .field(
        'description',
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying .'
      )
      .field('location', 'Kigal-Rwanda')
      .field('latitude', '232436458765')
      .field('longitude', '45678998765')
      .field('services', ['restaurant', 'breakfast', 'gym', 'swimming pool'])
      .field('amenities', ['restaurant', 'breakfast', 'gym', 'swimming pool'])
      .field('user_id', 1)
      .attach(
        'image',
        path.join(__dirname, 'weatherApp.PNG'),
        'weatherApp.png'
      );
    expect(res.status).to.be.equal(403);
  });

  it('should not update an accommodation if loggedIn user is not a travel admin', async () => {
    const logIn = await chai.request(app).post('/api/v1/users/login').send({
      email: 'REQUESTER@gmail.com',
      password: 'REQUESTER2gmail'
    });
    const data = {
      token: `Bearer ${logIn.body.token}`
    };
    const res = await chai
      .request(app)
      .post('/api/v1/accommodations')
      .set('Authorization', data.token)
      .send({
        name: 'Marriot Hotel',
        description:
          'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying .',
        location_id: 12,
        services: ['restaurant', 'breakfast', 'gym', 'swimming pool'],
        amenities: ['restaurant', 'breakfast', 'gym', 'swimming pool'],
        images: [
          'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        ],
        imagesId: ['456780rty']
      });
    expect(res.status).to.be.equal(403);
  });

  it('should update an accommodation', async () => {
    const logIn = await chai.request(app).post('/api/v1/users/login').send({
      email: 'TRAVEL_ADMIN@gmail.com',
      password: 'TRAVEL_ADMIN2gmail'
    });
    const data = {
      token: `Bearer ${logIn.body.token}`
    };
    const res1 = await chai
      .request(app)
      .post('/api/v1/accommodations')
      .set('authorization', data.token)
      .send({
        name: 'Marriot Hotel',
        description:
          'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying .',
        location_id: 13,
        services: ['restaurant', 'breakfast', 'gym', 'swimming pool'],
        amenities: ['restaurant', 'breakfast', 'gym', 'swimming pool'],
        images: [
          'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        ],
        imagesId: ['456780rty']
      });
    const res = await chai
      .request(app)
      .put(`/api/v1/accommodations/${res1.body.data.id}`)
      .set('Authorization', data.token)
      .send({
        name: 'Serena Hotel',
        description:
          'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying .',
        location_id: 13,
        services: ['restaurant', 'breakfast', 'gym', 'swimming pool'],
        amenities: ['restaurant', 'breakfast', 'gym', 'swimming pool'],
        images: [
          'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        ],
        imagesId: ['456780rty']
      });
    expect(res.body).to.have.property('message');
    expect(res.status).to.be.equal(200);
  });

  it('should not delete an accommodation if a user is not loggedIn', async () => {
    const accommodations = await createAccommodation(accommodatonData);
    accommodations.save();
    const res = await chai
      .request(app)
      .delete(`/api/v1/accommodations/${accommodations.dataValues.id}`);
    expect(res.status).to.be.equal(403);
    expect(res.body).to.have.property('message');
  });

  it('should not delete an accommodation if loggedIn user is not Travel Admin', async () => {
    const logIn = await chai.request(app).post('/api/v1/users/login').send({
      email: 'REQUESTER@gmail.com',
      password: 'REQUESTER2gmail'
    });
    const data = {
      token: `Bearer ${logIn.body.token}`
    };
    const accommodations = await createAccommodation(accommodatonData);
    accommodations.save();
    const res = await chai
      .request(app)
      .delete(`/api/v1/accommodations/${accommodations.dataValues.id}`)
      .set('Authorization', data.token);
    expect(res.status).to.be.equal(403);
    expect(res.body).to.have.property('message');
  });

  it('should delete an accommodation', async () => {
    const logIn = await chai.request(app).post('/api/v1/users/login').send({
      email: 'TRAVEL_ADMIN@gmail.com',
      password: 'TRAVEL_ADMIN2gmail'
    });
    const data = {
      token: `Bearer ${logIn.body.token}`
    };
    const accommodations = await createAccommodation(accommodatonData);
    accommodations.save();
    const res = await chai
      .request(app)
      .delete(`/api/v1/accommodations/${accommodations.dataValues.id}`)
      .set('Authorization', data.token);
    expect(res.status).to.be.equal(200);
    expect(res.body).to.have.property('message');
  });
});
