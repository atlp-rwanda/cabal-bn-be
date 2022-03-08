import chai, { request, expect } from 'chai';
import chaiHttp from 'chai-http';
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
        password: 'Tsa2341gmail'
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
});
