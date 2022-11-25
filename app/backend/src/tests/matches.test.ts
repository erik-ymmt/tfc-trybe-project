import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Response } from 'superagent';

import App from '../app';
import { token } from './mocks/userMocks';
import getRegisteredEmails from '../helpers/getRegisteredEmails';
import * as jwt from 'jsonwebtoken';

// import MatchesModel from '../models/MatchesModel';
// import MatchesService from '../services/MatchesService';
// import Match from '../database/models/Match';
// import { AllMatchesMock, allMatchesMock } from './mocks/mathcesMock';
// import { IMatchesModel } from '../interfaces/IMatches';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Matches endpoint tests', () => {
  let chaiHttpResponse: Response;

  afterEach(sinon.restore);

  describe('Get All Teams tests', () => {
    beforeEach(async () => {
      // const teamsModel = new MatchesModel();
      // const teamsService = new MatchesService(teamsModel);
      // sinon.stub(teamsModel, 'findAll')
      //   .resolves(allMatchesMock as AllMatchesMock[]);
      // sinon.stub(teamsService, 'findAll').resolves(allMatchesMock);
    });

    it('Get all matches - success', async () => {

      chaiHttpResponse = await chai
        .request(app)
        .get('/matches')
      
      expect(chaiHttpResponse).to.have.status(200);

      // ele está instanciando fora, nao consegui mockar a instancia, como fazer?
      // expect(chaiHttpResponse.body).to.be.deep.equal(allTeamsMock);
    });

    it('Get all matches - success', async () => {

      chaiHttpResponse = await chai
        .request(app)
        .get('/matches?inProgress=true')
      
      expect(chaiHttpResponse).to.have.status(200);
    });
  });

  describe('Create Match tests', () => {
    let chaiHttpResponse: Response;
  
    it('Create Match - success', async () => {
        sinon.stub(getRegisteredEmails, 'findAll').resolves({emails: ['admin@admin.com']});
        sinon.stub(jwt, 'verify').resolves({email:'admin@admin.com', role: 'admin'});
  
        chaiHttpResponse = await chai
          .request(app)
          .post('/matches')
          .set('Authorization', token)
          .send({
            "homeTeam": 12,
            "awayTeam": 9,
            "homeTeamGoals": 2,
            "awayTeamGoals": 3,
            role: 'admin'
          })
        
        expect(chaiHttpResponse).to.have.status(201);
  
        // ele está instanciando fora, nao consegui mockar a instancia, como fazer?
        // expect(chaiHttpResponse.body).to.be.deep.equal(allTeamsMock);
      });
    });

  // describe('tests', () => {
  // });
});
