import chai, { request, expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import 'dotenv/config';

chai.use(chaiHttp);

describe('USER END-POINT TEST', () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3d6b4ac (chore: minor changes)
=======
>>>>>>> 886728a (finished rebasing and updating user model)
=======
>>>>>>> 3d6b4ac (chore: minor changes)
=======
>>>>>>> ce6d03e (chore: minor changes)
  describe('REGISTER USER TEST', () => {
    it('should register a user and get a token', async () => {
      const res = await request(app)
        .post('/api/v1/user/register')
        .send({
          email: `T${new Date().getMilliseconds()}tsa2341@gmail.com`,
          password: 'Tsa2341@gmail'
        });

      expect(res.body).to.haveOwnProperty('token');
      expect(res).to.have.status([201]);
    });

    it('should not register a user if exist', async () => {
      const res = await request(app).post('/api/v1/user/register').send({
        email: 'REQUESTER@gmail.com',
        password: 'Tsa2341@gmail'
      });

      expect(res).to.have.status([409]);
    });

    it('should not register a user if no password', async () => {
      const res = await request(app)
        .post('/api/v1/user/register')
        .send({
          email: `${new Date().getMilliseconds()}Tsa23415@example.com`
        });

      expect(res).to.have.status([406]);
    });

    it('should not register a user if password invalid', async () => {
      const res = await request(app)
        .post('/api/v1/user/register')
        .send({
          email: `${new Date().getMilliseconds()}Tsa23415@example.com`,
          password: 'df'
        });

      expect(res).to.have.status([406]);
    });
  });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 2416061 (chore: added tests)
=======
>>>>>>> 4e05ae2 (minor changes)
=======
>>>>>>> 7979cc8 (chore: some rebase commit)
=======
>>>>>>> 2416061 (chore: added tests)
	describe('REGISTER USER TEST', () => {
		it('should register a user and get a token', async () => {
			const res = await request(app)
				.post('/api/v1/user/register')
				.send({
					email: `T${new Date().getMilliseconds()}tsa2341@gmail.com`,
					password: 'Tsa2341@gmail',
				});

			expect(res.body).to.haveOwnProperty('token');
			expect(res).to.have.status([201]);
		});

		it('should not register a user if exist', async () => {
			const res = await request(app).post('/api/v1/user/register').send({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
				email: 'REQUESTER@gmail.com',
=======
				email: 'alain@example.com',
>>>>>>> 7979cc8 (chore: some rebase commit)
=======
				email: 'alain@example.com',
>>>>>>> 2416061 (chore: added tests)
=======
				email: 'REQUESTER@gmail.com',
>>>>>>> 97759dc (chore: addedd other user model fields)
				password: 'Tsa2341@gmail',
			});

			expect(res).to.have.status([409]);
		});

		it('should not register a user if no password', async () => {
			const res = await request(app)
				.post('/api/v1/user/register')
				.send({
					email: `${new Date().getMilliseconds()}Tsa23415@example.com`,
				});

			expect(res).to.have.status([406]);
		});

		it('should not register a user if password invalid', async () => {
			const res = await request(app)
				.post('/api/v1/user/register')
				.send({
					email: `${new Date().getMilliseconds()}Tsa23415@example.com`,
					password: 'df',
				});

			expect(res).to.have.status([406]);
		});
	});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7979cc8 (chore: some rebase commit)
=======
>>>>>>> 2416061 (chore: added tests)
=======
>>>>>>> 3d6b4ac (chore: minor changes)
=======
>>>>>>> 886728a (finished rebasing and updating user model)
=======
>>>>>>> 4e05ae2 (minor changes)
=======
>>>>>>> 7979cc8 (chore: some rebase commit)
=======
>>>>>>> 2416061 (chore: added tests)
=======
>>>>>>> 3d6b4ac (chore: minor changes)
=======
>>>>>>> ce6d03e (chore: minor changes)
});
