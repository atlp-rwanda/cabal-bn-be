import chai, { request, expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
<<<<<<< HEAD
import { tripRequest, checkValidation } from './dammyData';
=======
import { tripRequest,checkValidation } from './dammyData';
>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7
import 'dotenv/config';

chai.use(chaiHttp);

<<<<<<< HEAD
describe('TRIP END-POINT TESTING', () => {
  it('Should create the Trip  Request while logged as Requester', async () => {
    const login = await chai
      .request(app)
      .post('/api/v1/users/login')
      .send({ email: 'REQUESTER@gmail.com', password: 'REQUESTER2gmail' });
    const res = await chai
      .request(app)
      .post('/api/v1/trip/request')
      .set('Authorization', `Bearer ${login.body.token}`)
      .send(tripRequest);
    expect(res).to.have.status([201]);
  });

  it('While not logged in Should not create the Trip', (done) => {
    chai
      .request(app)
      .post('/api/v1/trip/request')
=======
describe("TRIP END-POINT TESTING", () => {
  it("Should create the Trip  Request while logged as Requester",async () => {
    const login = await chai.request(app).post("/api/v1/users/login")
    .send( {email:"REQUESTER@gmail.com" , password:"REQUESTER2gmail"});
  const res = await chai
      .request(app)
      .post("/api/v1/trip/request")
      .set("Authorization",`Bearer ${login.body.token}`)
      .send(tripRequest);
      expect(res).to.have.status([201]);
  });

  it("Should not create the Trip  Request while logged as Requester and not follow the validatation",async () => {
    const login = await chai.request(app).post("/api/v1/users/login")
    .send( {email:"REQUESTER@gmail.com" , password:"REQUESTER2gmail"});
  const res = await chai
      .request(app)
      .post("/api/v1/trip/request")
      .set("Authorization",`Bearer ${login.body.token}`)
      .send(checkValidation);
      expect(res).to.have.status([200]);
  });
  
  it("While not logged in Should not create the Trip", (done) => {
    chai
      .request(app)
      .post("/api/v1/trip/request")
>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7
      .send(tripRequest)
      .end((err, res) => {
        expect(res).to.have.status([403]);
        done();
      });
  });

<<<<<<< HEAD
  it('Should retrieve all user Trips with pending status', async () => {
    const login = await chai
      .request(app)
      .post('/api/v1/users/login')
      .send({ email: 'REQUESTER@gmail.com', password: 'REQUESTER2gmail' });

    const res = await chai
      .request(app)
      .get('/api/v1/trip')
      .set('Authorization', `Bearer ${login.body.token}`)
      .send();
    expect(res).to.have.status([200]);
  });
  it('While not logged in Should not retrieve all user Trips with pending status  ', (done) => {
    chai
      .request(app)
      .get('/api/v1/trip')
=======
  it("Should retrieve all user Trips with pending status",async() => {
    const login = await chai.request(app).post("/api/v1/users/login")
    .send( {email:"REQUESTER@gmail.com" , password:"REQUESTER2gmail"});
    
    const res = await chai
      .request(app)
      .get("/api/v1/trip")
      .set("Authorization",`Bearer ${login.body.token}`)
      .send()
      expect(res).to.have.status([200]);
  });
  it("While not logged in Should not retrieve all user Trips with pending status  ", (done) => {
    chai
      .request(app)
      .get("/api/v1/trip")
>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7
      .send()
      .end((err, res) => {
        expect(res).to.have.status([403]);
        done();
      });
  });
<<<<<<< HEAD
  it('while logged in manager should retrieve all Trip requests owned', async () => {
    const login = await chai
      .request(app)
      .post('/api/v1/users/login')
      .send({ email: 'MANAGER@gmail.com', password: 'MANAGER2gmail' });

    const res = await chai
      .request(app)
      .get('/api/v1/trip/manager')
      .set('Authorization', `Bearer ${login.body.token}`)
      .send();
    expect(res).to.have.status([200]);
  });
});
it('While not logged in manager Should not retrieve all Trip requests owned', (done) => {
  chai
    .request(app)
    .get('/api/v1/trip/manager')
    .send()
    .end((err, res) => {
      expect(res).to.have.status([403]);
      done();
    });
});
it('While logged in user Should  Update Trip request which has pending status', async () => {
  const login = await chai
    .request(app)
    .post('/api/v1/users/login')
    .send({ email: 'REQUESTER@gmail.com', password: 'REQUESTER2gmail' });
  const res = await chai
    .request(app)
    .put(`/api/v1/trip/changeRequest/1`)
    .set('Authorization', `Bearer ${login.body.token}`)
    .send({ reason: 'Tourism' });
  expect(res).to.have.status([200]);
});
it('While not logged in  Should not Update Trip request which has not pending status', (done) => {
  chai
    .request(app)
    .put(`/api/v1/trip/changeRequest/1`)
    .send(tripRequest)
    .end((err, res) => {
      expect(res).to.have.status([403]);
      done();
    });
});
it(' Should delete the trip requests that are in pending status', async () => {
  const login = await chai
    .request(app)
    .post('/api/v1/users/login')
    .send({ email: 'REQUESTER@gmail.com', password: 'REQUESTER2gmail' });
  const res = await chai
    .request(app)
    .delete(`/api/v1/trip/1`)
    .set('Authorization', `Bearer ${login.body.token}`)
    .send();
  expect(res).to.have.status([204]);
});
it('While not logged in  Should  not delete the trip requests that are in pending status', (done) => {
  chai
    .request(app)
    .delete(`/api/v1/trip/3`)
    .end((err, res) => {
      expect(res).to.have.status([403]);
      done();
    });
});
=======
  it("while logged in manager should retrieve all Trip requests owned", async() => {
    const login = await chai.request(app).post("/api/v1/users/login")
    .send( {email:"MANAGER@gmail.com" , password:"MANAGER2gmail"});

    const res = await chai
      .request(app)
      .get("/api/v1/trip/manager")
      .set("Authorization",`Bearer ${login.body.token}`)
      .send()
      expect(res).to.have.status([200]);
      });
  });
  it("While not logged in manager Should not retrieve all Trip requests owned", (done) => {
    chai
      .request(app)
      .get("/api/v1/trip/manager")
      .send()
      .end((err, res) => {
        expect(res).to.have.status([403]);
        done();
      });
  });
  it("While logged in user Should  Update Trip request which has pending status", async()=> {
    const login = await chai.request(app).post("/api/v1/users/login")
    .send( {email:"REQUESTER@gmail.com" , password:"REQUESTER2gmail"});
     const res = await chai.request(app).put(`/api/v1/trip/changeRequest/1`)
    .set("Authorization",`Bearer ${login.body.token}`)
        .send({reason: "Tourism"})
            expect(res).to.have.status([200]);
});
  it("While not logged in  Should not Update Trip request which has not pending status", (done) => {
    chai.request(app).put(`/api/v1/trip/changeRequest/1`)
        .send(tripRequest)
        .end((err, res) => {
            expect(res).to.have.status([403]);
            done();
        });
});
it(" Should delete the trip requests that are in pending status",async () => {
  const login = await chai.request(app).post("/api/v1/users/login")
  .send( {email:"REQUESTER@gmail.com" , password:"REQUESTER2gmail"});
  const res = await chai
  .request(app)
  .delete(`/api/v1/trip/1`)
  .set("Authorization",`Bearer ${login.body.token}`)
  .send()
  expect(res).to.have.status([200])
})
it("While not logged in  Should  not delete the trip requests that are in pending status", (done) => {
  chai.request(app).delete(`/api/v1/trip/3`)
      .end((err, res) => {
          expect(res).to.have.status([403])
          done()
      })
})

>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7
