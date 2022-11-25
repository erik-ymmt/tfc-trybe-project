import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Response } from 'superagent';

import App from '../app';
import { token } from './mocks/userMocks';
import generateToken from '../authentication/generateToken';
import getRoleFromEmail from '../helpers/getRoleFromEmail';
import validateLogin from '../authentication/validateLogin';
import getRegisteredEmails from '../helpers/getRegisteredEmails';
import * as jwt from 'jsonwebtoken';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Login Controller tests', () => {
  let chaiHttpResponse: Response;

  afterEach(sinon.restore);

  describe('Login tests', () => {
    before(async () => {
      sinon.stub(validateLogin, 'validate').resolves();
      sinon.stub(generateToken, 'create').resolves(token);
      sinon.stub(getRoleFromEmail, 'findOne').resolves('admin');
    });

    it('Login success', async () => {
      const user = {
        'email': 'user@user.com',
        'password': 'secret_user'
      };

      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send(user)
      
      expect(chaiHttpResponse.status).to.be.equal(200);
      // expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body.token).to.be.deep.equal(token);
    });

    it('Login fail', async () => {
      const user = {
        'email': '',
        'password': 'secret_user'
      };

      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send(user)

      expect(chaiHttpResponse).to.have.status(400);
      expect(chaiHttpResponse.body).to.be.deep.equal({
        'message': 'All fields must be filled'
      });
    });

    it('Login error', async () => {
      sinon.stub(validateLogin, 'validate').throws;
      const user = {
        'email': 'user@user.com',
        'password': 'secret_user'
      };

      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send(user)

      expect(chaiHttpResponse).to.have.status(500);
    });
  });

  describe('Token tests', () => {
    before(async () => {
      sinon.stub(getRegisteredEmails, 'findAll').resolves({emails: ['admin@admin.com']});
    });

    it('Token authentication success', async () => {
      sinon.stub(jwt, 'verify').resolves({email:'admin@admin.com', role: 'admin'});
      chaiHttpResponse = await chai
        .request(app)
        .get('/login/validate')
        .set('Authorization', token)
        .send({role: 'admin'})

        expect(chaiHttpResponse.body).to.be.deep.equal({ 'role': 'admin' });
        expect(chaiHttpResponse).to.have.status(200);
    });

    it('Token authentication fail', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/login/validate')
        .set('Authorization', '')
        .send({role: 'admin'})

        expect(chaiHttpResponse).to.have.status(401);
    });

    it('Token authentication invalid', async () => {
      sinon.stub(jwt, 'verify').resolves({email:'notadmin@admin.com', role: 'admin'});
      chaiHttpResponse = await chai
        .request(app)
        .get('/login/validate')
        .set('Authorization', token)
        .send({role: 'admin'})

        expect(chaiHttpResponse).to.have.status(401);
    });

    it('Token authentication error', async () => {
      sinon.stub(jwt, 'verify').throws;
      chaiHttpResponse = await chai
        .request(app)
        .get('/login/validate')
        .set('Authorization', token)
        .send({role: 'admin'})

        expect(chaiHttpResponse).to.have.status(401);
    });
  });
});
