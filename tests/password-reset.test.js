import chai, { request, expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import 'dotenv/config';
import { generateToken, generateTokenid, hashPassword } from '../src/helpers/user.helpers';
chai.use(chaiHttp);


describe('TESTING PASSWORD RESET', () => {
    it('should not reset password for invalid email', (done) => {
        chai
            .request(app)
            .post(`/api/v1/users/forgot`)
            .send({ email: "invalid@gmail.com" })
            .end((err, res) => {
                expect(res).to.have.status([403]);
                done();
            });
    });

    it('should Send password reset link', (done) => {
        chai
            .request(app)
            .post(`/api/v1/users/forgot`)
            .send({ email: "SUPER_ADMIN@gmail.com" })
            .end((err, res) => {
                expect(res).to.have.status([200]);
                done();
            });
    });
    it('should reset password', (done) => {
        chai
            .request(app)
            .post(`/api/v1/users/reset`)
            .set("Authorization", `bearer ${generateTokenid(2,'1h')}`)
            .end((err, res) => {
                expect(res).to.have.status([200]);
                done();
            });
    });
    it('should reset not  password', (done) => {
        chai
            .request(app)
            .post(`/api/v1/users/reset`)
            .end((err, res) => {
                expect(res).to.have.status([200]);
                done();
            });
    });
});