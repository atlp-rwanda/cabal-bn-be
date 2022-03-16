import chai, { request, expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import 'dotenv/config';
import UserController from '../src/controllers/user.controller';
import { httpReq, httpRes } from './user.mockData';

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

  describe('LOGIN WITH SOCIAL ACCOUNTS USER TEST', () => {
    it('Should hit the endpoint if sign in by google used', async () => {
      const res = await request(app).get('/api/v1/users/google/login');

      expect(res.status).to.equal(200);
      expect(res.text).to.not.equal(null);
    });

    it('Should hit the endpoint if sign in by facebook used', async () => {
      const res = await request(app).get('/api/v1/users/facebook/login');

      expect(res.status).to.equal(200);
      expect(res.text).to.not.equal(null);
    });

    it('Should return a token if sign in by google used', async () => {
      const data = await new UserController().googleLogin(
        httpReq(`tsa23411@gmail.com`),
        httpRes()
      );

      expect(data.status).to.equal(200);
      expect(data.body).to.haveOwnProperty('token');
    });

    it('Should return a token if sign in by facebook used', async () => {
      const data = await new UserController().facebookLogin(
        httpReq(`tsa234112@gmail.com`),
        httpRes()
      );

      expect(data.status).to.equal(200);
      expect(data.body).to.haveOwnProperty('token');
    });

    it('Should return a token if sign in by google used and user registered', async () => {
      const data = await new UserController().googleLogin(
        httpReq('REQUESTER@gmail.com'),
        httpRes()
      );

      expect(data.status).to.equal(200);
      expect(data.body).to.haveOwnProperty('token');
    });

    it('Should return a token if sign in by facebook used and user registered', async () => {
      const data = await new UserController().facebookLogin(
        httpReq('REQUESTER@gmail.com'),
        httpRes()
      );

      expect(data.status).to.equal(200);
      expect(data.body).to.haveOwnProperty('token');
    });
  });
});
