import { stub, assert } from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import tripService from '../src/services/trip.service';
import { tripRequest, checkValidation } from './dammyData';
import 'dotenv/config';

chai.use(chaiHttp);

describe('TRIP END-POINT TESTING', () => {
  let reqToken, reqToken2, manToken, superToken;
  before(async () => {
    const login = await chai
      .request(app)
      .post('/api/v1/users/login')
      .send({ email: 'REQUESTER@gmail.com', password: 'REQUESTER2gmail' });

    reqToken = login.body.token;
  });
  before(async () => {
    const login = await chai
      .request(app)
      .post('/api/v1/users/login')
      .send({ email: 'REQUESTER1@gmail.com', password: 'REQUESTER2gmail' });
    reqToken2 = login.body.token;
  });
  before(async () => {
    const login = await chai
      .request(app)
      .post('/api/v1/users/login')
      .send({ email: 'MANAGER@gmail.com', password: 'MANAGER2gmail' });

    manToken = login.body.token;
  });
  before(async () => {
    const login = await chai
      .request(app)
      .post('/api/v1/users/login')
      .send({ email: 'SUPER_ADMIN@gmail.com', password: 'SUPER_ADMIN2gmail' });

    superToken = login.body.token;
  });

  it('Should create the Trip  Request while logged as Requester', async () => {
    const res = await chai
      .request(app)
      .post('/api/v1/trips')
      .set('Authorization', `Bearer ${reqToken}`)
      .send(tripRequest);
    expect(res).to.have.status([201]);
  });

  it('Should not create the Trip  Request if an error occurred', async () => {
    const createTrip = stub(tripService, 'createTrip').rejects(
      new Error('Database failed')
    );

    const res = await chai
      .request(app)
      .post('/api/v1/trips')
      .set('Authorization', `Bearer ${reqToken}`)
      .send(tripRequest);
    assert.calledOnce(createTrip);
    expect(res).to.have.status(500);
    createTrip.restore();
  });

  it('Should not create the Trip if arrival_location and accommodation no match', async () => {
    const res = await chai
      .request(app)
      .post('/api/v1/trips')
      .set('Authorization', `Bearer ${reqToken}`)
      .send({
        arrival_location_id: 2,
        depart_location_id: 2,
        accommodation_id: 1,
        tripDate: '2022-10-12',
        returnDate: '2023-12-10',
        reason: 'Tourism'
      });
    expect(res).to.have.status([400]);
  });

  it('Should not create the Trip  Request while logged as Requester and not follow the validatation', async () => {
    const res = await chai
      .request(app)
      .post('/api/v1/trips')
      .set('Authorization', `Bearer ${reqToken}`)
      .send(checkValidation);
    expect(res).to.have.status([400]);
  });

  it('Should not create the Trip  Request if requester not assigned a manager', async () => {
    const res = await chai
      .request(app)
      .post('/api/v1/trips')
      .set('Authorization', `Bearer ${reqToken2}`)
      .send(tripRequest);
    expect(res).to.have.status([400]);
  });

  it('Should not create the Trip while not logged in ', (done) => {
    chai
      .request(app)
      .post('/api/v1/trips')
      .send(tripRequest)
      .end((err, res) => {
        expect(res).to.have.status([403]);
        done();
      });
  });

  it('Should not create the Trip while date to leave is greater than date to return ', (done) => {
    chai
      .request(app)
      .post('/api/v1/trips')
      .set('Authorization', `Bearer ${reqToken}`)
      .send({
        arrival_location_id: 1,
        depart_location_id: 2,
        accommodation_id: 1,
        tripDate: '2023-10-12',
        returnDate: '2021-12-10',
        reason: 'Tourism'
      })
      .end((err, res) => {
        expect(res).to.have.status([400]);
        done();
      });
  });

  it('Should not create the Trip while logged in with invalid token ', (done) => {
    chai
      .request(app)
      .post('/api/v1/trips')
      .set('Authorization', `Bearer kkkkkkkkkkkkk`)
      .send(tripRequest)
      .end((err, res) => {
        expect(res).to.have.status([401]);
        done();
      });
  });

  it('Should retrieve all user Trips with pending status while logged in as requester', async () => {
    const res = await chai
      .request(app)
      .get('/api/v1/trips')
      .set('Authorization', `Bearer ${reqToken}`)
      .send();
    expect(res).to.have.status([200]);
  });

  it('Should retrieve all user Trips with pending status while logged in as super_admin', async () => {
    const res = await chai
      .request(app)
      .get('/api/v1/trips')
      .set('Authorization', `Bearer ${superToken}`)
      .send();
    expect(res).to.have.status([200]);
  });

  it('Should not retrieve all user Trips if error occured', async () => {
    const findSpecificTrip = stub(tripService, 'findSpecificTrip').rejects(
      new Error('Database failed')
    );

    const res = await chai
      .request(app)
      .get('/api/v1/trips')
      .set('Authorization', `Bearer ${reqToken}`)
      .send(tripRequest);
    assert.calledOnce(findSpecificTrip);
    expect(res).to.have.status(500);
    findSpecificTrip.restore();
  });

  it('Should not retrieve all user Trips with pending status While not logged in   ', (done) => {
    chai
      .request(app)
      .get('/api/v1/trips')
      .send()
      .end((err, res) => {
        expect(res).to.have.status([403]);
        done();
      });
  });

  it(' should retrieve all Trip requests owned while logged in as manager', async () => {
    const res = await chai
      .request(app)
      .get('/api/v1/trips')
      .set('Authorization', `Bearer ${manToken}`)
      .send();
    expect(res).to.have.status([200]);
  });

  it(' should retrieve all Trip requests owned while logged in as manager with querries', async () => {
    const res = await chai
      .request(app)
      .get('/api/v1/trips/?page=1&limit=3')
      .set('Authorization', `Bearer ${manToken}`)
      .send();
    expect(res).to.have.status([200]);
  });

  it(' should not retrieve all Trip requests owned while logged in as manager if the service returned an error', async () => {
    const findSpecificTrip = stub(tripService, 'findSpecificTrip').rejects(
      new Error('Database failed')
    );

    const res = await chai
      .request(app)
      .get('/api/v1/trips')
      .set('Authorization', `Bearer ${manToken}`);
    assert.calledOnce(findSpecificTrip);
    expect(res).to.have.status(500);
    findSpecificTrip.restore();
  });

  it(' should retrieve all Trip requests owned while logged in as super_admin', async () => {
    const res = await chai
      .request(app)
      .get('/api/v1/trips')
      .set('Authorization', `Bearer ${superToken}`)
      .send();
    expect(res).to.have.status([200]);
  });

  it(' Should not retrieve all Trip requests owned while not logged in as manager', (done) => {
    chai
      .request(app)
      .get('/api/v1/trips')
      .send()
      .end((err, res) => {
        expect(res).to.have.status([403]);
        done();
      });
  });

  it('Should  Update Trip request which has pending status while logged in user ', async () => {
    const res = await chai
      .request(app)
      .put(`/api/v1/trips/1`)
      .set('Authorization', `Bearer ${reqToken}`)
      .send(tripRequest);
    expect(res).to.have.status([200]);
  });

  it('Should not Update a Trip request if service returned an error', async () => {
    const updateTrip = stub(tripService, 'updateTrip').rejects(
      new Error('Database failed')
    );

    const res = await chai
      .request(app)
      .put(`/api/v1/trips/1`)
      .set('Authorization', `Bearer ${reqToken}`)
      .send(tripRequest);
    assert.calledOnce(updateTrip);
    expect(res).to.have.status(500);
    updateTrip.restore();
  });

  it('Should  not update the trip requests that are approved', async () => {
    const res = await chai
      .request(app)
      .put(`/api/v1/trips/2`)
      .set('Authorization', `Bearer ${reqToken}`)
      .send(tripRequest);
    expect(res).to.have.status([400]);
  });

  it("Should  not update the trip requests that doesn't exist", async () => {
    const res = await chai
      .request(app)
      .put(`/api/v1/trips/2000`)
      .set('Authorization', `Bearer ${reqToken}`)
      .send(tripRequest);
    expect(res).to.have.status([404]);
  });

  it('While not logged in  Should not Update Trip request which has pending status', async () => {
    const trip = await chai
      .request(app)
      .post('/api/v1/trips')
      .set('Authorization', `Bearer ${reqToken}`)
      .send(tripRequest);

    const res = await chai
      .request(app)
      .put(`/api/v1/trips/${trip.id}`)
      .send(tripRequest);
    expect(res).to.have.status([403]);
  });

  it('Should delete the trip requests that are in pending status', async () => {
    const trip = await chai
      .request(app)
      .post('/api/v1/trips')
      .set('Authorization', `Bearer ${reqToken}`)
      .send(tripRequest);

    const res = await chai
      .request(app)
      .delete(`/api/v1/trips/${trip.body.data.id}`)
      .set('Authorization', `Bearer ${reqToken}`);
    expect(res).to.have.status([200]);
  });

  it('Should not delete a Trip request if service returned an error', async () => {
    const deleteTrip = stub(tripService, 'deleteTrip').rejects(
      new Error('Database failed')
    );

    const res = await chai
      .request(app)
      .delete(`/api/v1/trips/1`)
      .set('Authorization', `Bearer ${reqToken}`);
    assert.calledOnce(deleteTrip);
    expect(res).to.have.status(500);
    deleteTrip.restore();
  });

  it('Should  not delete the trip requests that are approved', async () => {
    const res = await chai
      .request(app)
      .delete(`/api/v1/trips/2`)
      .set('Authorization', `Bearer ${reqToken}`);
    expect(res).to.have.status([400]);
  });

  it('Should  not delete the trip requests that are in pending status while not logged in', async () => {
    const res = await chai.request(app).delete(`/api/v1/trips/1`).send();
    expect(res).to.have.status([403]);
  });
});
