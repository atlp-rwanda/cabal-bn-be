import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import { tripRequest, checkValidation } from './dammyData';
import 'dotenv/config';

chai.use(chaiHttp);

describe('TRIP END-POINT TESTING', () => {
  let reqToken, manToken;
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
      .send({ email: 'MANAGER@gmail.com', password: 'MANAGER2gmail' });

    manToken = login.body.token;
  });

  it('Should create the Trip  Request while logged as Requester', async () => {
    const res = await chai
      .request(app)
      .post('/api/v1/trips')
      .set('Authorization', `Bearer ${reqToken}`)
      .send(tripRequest);
    expect(res).to.have.status([201]);
  });

  it('Should not create the Trip  Request while logged as Requester and not follow the validatation', async () => {
    const res = await chai
      .request(app)
      .post('/api/v1/trips')
      .set('Authorization', `Bearer ${reqToken}`)
      .send(checkValidation);
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

  it('Should retrieve all user Trips with pending status', async () => {
    const res = await chai
      .request(app)
      .get('/api/v1/trips')
      .set('Authorization', `Bearer ${reqToken}`)
      .send();
    expect(res).to.have.status([200]);
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
      .get('/api/v1/trips/manager')
      .set('Authorization', `Bearer ${manToken}`)
      .send();
    expect(res).to.have.status([200]);
  });

  it(' Should not retrieve all Trip requests owned while not logged in as manager', (done) => {
    chai
      .request(app)
      .get('/api/v1/trips/manager')
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

  it('While not logged in  Should not Update Trip request which has not pending status', async () => {
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
      .set('Authorization', `Bearer ${reqToken}`)
      .send();
    expect(res).to.have.status([200]);
  });

  it('Should  not delete the trip requests that are in pending status while not logged in', async () => {
    const res = await chai.request(app).delete(`/api/v1/trips/1`).send();
    expect(res).to.have.status([403]);
  });
});
