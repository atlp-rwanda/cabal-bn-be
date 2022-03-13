import chai, { request, expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import { tripRequest } from './dammyData';
import 'dotenv/config';

chai.use(chaiHttp);
describe("TRIP END-POINT TESTING", () => {
  it("Should create the Trip", (done) => {
    chai
      .request(app)
      .post("/api/v1/trip/request")
      .send(tripRequest)
      .end((err, res) => {
        expect(res).to.have.status([201]);
        done();
      });
  });
  it("Wile not logged in Should not create the Trip", (done) => {
    chai
      .request(app)
      .post("/api/v1/trip/request")
      .send(tripRequest)
      .end((err, res) => {
        expect(res).to.have.status([403]);
        done();
      });
  });

  it("Should retrieve all user Trips with pending status  ", (done) => {
    chai
      .request(app)
      .get("/api/v1/trip")
      .send()
      .end((err, res) => {
        expect(res).to.have.status([200]);
        done();
      });
  });
  it("While not logged in Should not retrieve all user Trips with pending status  ", (done) => {
    chai
      .request(app)
      .get("/api/v1/trip")
      .send()
      .end((err, res) => {
        expect(res).to.have.status([403]);
        done();
      });
  });
  it("Should retrieve all Trip requests reported to manager ", (done) => {
    chai
      .request(app)
      .get("/api/v1/trip/manager/3")
      .send()
      .end((err, res) => {
        expect(res).to.have.status([200]);
        done();
      });
  });
  it("While not logged in Should not retrieve all Trip requests reported to manager ", (done) => {
    chai
      .request(app)
      .get("/api/v1/trip/manager/3")
      .send()
      .end((err, res) => {
        expect(res).to.have.status([403]);
        done();
      });
  });
  it("Should  Update Trip request which has pending status", (done) => {
    chai.request(app).put(`/api/v1/trip/changeRequest/1`)
        .send(tripRequest)
        .end((err, res) => {
            expect(res).to.have.status([200]);
            done();
        });
});
  it("While not logged in  Should not Update Trip request which has not pending status", (done) => {
    chai.request(app).put(`/api/v1/trip/changeRequest/1`)
        .send(tripRequest)
        .end((err, res) => {
            expect(res).to.have.status([403]);
            done();
        });
});
it(" Should delete the trip requests that are in pending status", (done) => {
  chai.request(app).delete(`/api/v1/trip/3`)
      .end((err, res) => {
          expect(res).to.have.status([204])
          done()
      })
})
it("While not logged in  Should  not delete the trip requests that are in pending status", (done) => {
  chai.request(app).delete(`/api/v1/trip/3`)
      .end((err, res) => {
          expect(res).to.have.status([403])
          done()
      })
})

})

