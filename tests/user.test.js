import chai, { request, expect } from 'chai';
import chaiHttp from 'chai-http';
import { generateToken } from '../src/helpers/user.helpers';
import app from '../src/app';
import 'dotenv/config';

chai.use(chaiHttp);

describe('USER END-POINT TEST', () => {
  describe('REGISTER USER TEST', () => {
    it('should register a user and get a token', async () => {
      const res = await request(app)
        .post('/api/v1/users/register')
        .send({
          email: `T${new Date().getMilliseconds()}tsa2341@gmail.com`,
          password: 'Tsa2341gmail'
        });

      expect(res.body).to.haveOwnProperty('token');
      expect(res).to.have.status([201]);
    });

    it('should not register a user if exist', async () => {
      const res = await request(app).post('/api/v1/users/register').send({
        email: 'REQUESTER@gmail.com',
        password: 'REQUESTER2gmail'
      });

      expect(res).to.have.status([409]);
    });

    it('should not register a user if no password', async () => {
      const res = await request(app)
        .post('/api/v1/users/register')
        .send({
          email: `${new Date().getMilliseconds()}Tsa23415@example.com`
        });

      expect(res).to.have.status([400]);
    });

    it('should not register a user if password invalid', async () => {
      const res = await request(app)
        .post('/api/v1/users/register')
        .send({
          email: `${new Date().getMilliseconds()}Tsa23415@example.com`,
          password: 'df'
        });

      expect(res).to.have.status([400]);
    });
  });

  describe('USER LOGIN', () => {
    it('it should login the user', async () => {
      const res = await request(app).post('/api/v1/users/login').send({
        email: 'SUPER_ADMIN@gmail.com',
        password: 'SUPER_ADMIN2gmail'
      });

      expect(res).to.have.status(201);
      expect(res.body).haveOwnProperty('token');
      expect(res.header).to.haveOwnProperty('authenticate');
    });

    it('it should not login if user is not in database', async () => {
      const res = await request(app).post('/api/v1/users/login').send({
        email: 'SUPER@gmail.com',
        password: 'SUPER_ADMIN2gmail'
      });

      expect(res).to.have.status(404);
      expect(res.body).to.haveOwnProperty('message');
    });

    it('should not login with invalid email', async () => {
      const res = await request(app).post('/api/v1/users/login').send({
        email: 'SUPER_ADMIN',
        password: 'SUPER_ADMIN2gmail'
      });
      expect(res.status).to.be.equal(400);
      expect(res.body).to.haveOwnProperty('message');
    });

    it('should not login with invalid password', async () => {
      const res = await request(app).post('/api/v1/users/login').send({
        email: 'SUPER_ADMIN@gmail.com',
        password: 'SUPER_ADMINgmail'
      });

      expect(res.status).to.be.equal(400);
      expect(res.body).to.haveOwnProperty('message');
    });

    it('should not login with wrong password', async () => {
      const res = await request(app).post('/api/v1/users/login').send({
        email: 'SUPER_ADMIN@gmail.com',
        password: 'SUPER_ADMIN2'
      });
      expect(res.status).to.be.equal(401);
      expect(res.body).to.haveOwnProperty('message');
    });

    it('should give an error on wrong route', async () => {
      const res = await request(app).post('/api/v1/users/log').send({
        email: 'alain@gmail.com',
        password: 'WORDPASS2'
      });
      expect(res.status).to.be.equal(404);
      expect(res).to.haveOwnProperty('text');
    });
  });

  describe('USER-LOGOUT TEST', () => {
    let tok;
    before(async () => {
      const res = await chai.request(app).post('/api/v1/users/login').send({
        email: 'SUPER_ADMIN@gmail.com',
        password: 'SUPER_ADMIN2gmail'
      });

      tok = res.body.token;
    });

    it('should not log out a user on wrong route', async () => {
      const res = await chai
        .request(app)
        .post(`/api/v1/users/logouttt`)
        .set('Authorization', `Bearer ${tok}`);

      expect(res.status).to.be.equal(404);
    });

    it('should not log out a user without access token', async () => {
      const res = await chai.request(app).post(`/api/v1/users/logout`);

      expect(res.status).to.be.equal(401);
    });

    it('should not log out a user with invalid access token', async () => {
      const res = await chai
        .request(app)
        .post(`/api/v1/users/logout`)
        .set({ Authorization: `Bearer kkkkkkkkkkkkkkkkkk` });

      expect(res.status).to.be.equal(401);
    });
  });
});
