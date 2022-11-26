import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Response } from 'superagent';

import App from '../app';
import { token } from './mocks/userMocks';
import getRegisteredEmails from '../helpers/getRegisteredEmails';
import * as jwt from 'jsonwebtoken';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Leaderboard endpoint tests', () => {
  let chaiHttpResponse: Response;

  afterEach(sinon.restore);

  describe('Get home matches leaderboard', () => {
    beforeEach(async () => {
    });

    it('Get home matches leaderboard - success', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/leaderboard/home')
      
      expect(chaiHttpResponse).to.have.status(200);
    });
  });

  describe('Get away matches leaderboard', () => {
    let chaiHttpResponse: Response;
  
    it('Get away matches leaderboard - success', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/leaderboard/home')
      
      expect(chaiHttpResponse).to.have.status(200);
    });
  });

  describe('Get all matches leaderboard', () => {
    let chaiHttpResponse: Response;
  
    it('Get all matches leaderboard - success', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/leaderboard')
      
      expect(chaiHttpResponse).to.have.status(200);
    });
  });
});
