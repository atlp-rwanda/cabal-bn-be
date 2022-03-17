import chai, { request, expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import 'dotenv/config';

chai.use(chaiHttp);

describe('ROLE END-POINT TEST', () => {
  describe('ASSIGNROLE USER TEST', () => {
    let superToken;
    let notsuperToken;
    before(async () => {
      const res = await request(app).post('/api/v1/users/login').send({
        email: `SUPER_ADMIN@gmail.com`,
        password: 'SUPER_ADMIN2gmail'
      });

      superToken = res.body.token;
    });

    before(async () => {
      const res = await request(app).post('/api/v1/users/login').send({
        email: `TRAVEL_ADMIN@gmail.com`,
        password: 'TRAVEL_ADMIN2gmail'
      });

      notsuperToken = res.body.token;
    });
    after(async () => {
      console.log('running');
      const res = await request(app)
        .patch('/api/v1/users/assignRole')
        .set('Authorization', `Bearer ${superToken}`)
        .send({
          email: `REQUESTER@gmail.com`,
          role: 'REQUESTER'
        });

      notsuperToken = res.body.token;
    });

    it('should assign a role a user', async () => {
      const res = await request(app)
        .patch('/api/v1/users/assignRole')
        .set('Authorization', `Bearer ${superToken}`)
        .send({
          email: 'REQUESTER@gmail.com',
          role: 'MANAGER'
        });

      expect(res.status).to.equal(200);
      expect(res.body.data.role_id).to.equal(3);
    });

    it('should not assign a role a user if not SUPER_ADMIN', async () => {
      const res = await request(app)
        .patch('/api/v1/users/assignRole')
        .set('Authorization', `Bearer ${notsuperToken}`)
        .send({
          email: 'REQUESTER@gmail.com',
          role: 'MANAGER'
        });

      expect(res.status).to.equal(401);
    });

    it("should not assign a role a user if role doesn't exist", async () => {
      const res = await request(app)
        .patch('/api/v1/users/assignRole')
        .set('Authorization', `Bearer ${superToken}`)
        .send({
          email: 'REQUESTER@gmail.com',
          role: 'MANAGERssdscs'
        });

      expect(res.status).to.equal(400);
    });

    it("should not assign a role a user if email doesn't exist", async () => {
      const res = await request(app)
        .patch('/api/v1/users/assignRole')
        .set('Authorization', `Bearer ${superToken}`)
        .send({
          email: 'REQUESTERdd@gmail.com',
          role: 'MANAGER'
        });

      expect(res.status).to.equal(404);
    });

    it('should not assign a role a user if already have the role given', async () => {
      const res = await request(app)
        .patch('/api/v1/users/assignRole')
        .set('Authorization', `Bearer ${superToken}`)
        .send({
          email: 'MANAGER@gmail.com',
          role: 'MANAGER'
        });

      expect(res.status).to.equal(409);
      expect(res.body.message).to.equal(`User already have MANAGER role`);
    });

    it('should not assign a role a user if not logged in', async () => {
      const res = await request(app).patch('/api/v1/users/assignRole').send({
        email: 'REQUESTER@gmail.com',
        role: 'REQUESTER'
      });

      expect(res.status).to.equal(403);
      expect(res.body.message).to.equal('user not logged in');
    });

    it('should retrieve all roles', async () => {
      const res = await request(app)
        .get('/api/v1/users/getRoles')
        .set('Authorization', `Bearer ${superToken}`);

      expect(res.status).to.equal(200);
    });
  });
});
