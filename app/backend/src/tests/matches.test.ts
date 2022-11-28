import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Response } from 'superagent';

import App from '../app';
import { token } from './mocks/userMocks';
import getRegisteredEmails from '../helpers/getRegisteredEmails';
import * as jwt from 'jsonwebtoken';

import Match from '../database/models/Match';
import { AllMatches, allMatchesMock, CreatedMatch, createdMatchMock } from './mocks/matchesMock';
import Team from '../database/models/Team';
import { allTeamsMock } from './mocks/teamsMock';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe.only('Matches endpoint tests', () => {
  let chaiHttpResponse: Response;

  afterEach(sinon.restore);

  describe('Get All Matches tests', () => {
    beforeEach(async () => {
      sinon.stub(Match, 'findAll').resolves(allMatchesMock as [[AllMatches], any]);
    });

    it('Get all matches - success', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/matches')
      
      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(allMatchesMock);
    });

    it('Get all matches in progress - success', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/matches?inProgress=true')
      
      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(allMatchesMock);
    });
  });

  describe('Create Match tests', () => {
    beforeEach(async () => {
      sinon.stub(Match, 'findAll').resolves(allMatchesMock as [[AllMatches], any]);
      sinon.stub(Match, 'create').resolves([{affectedRows: 1}] as unknown as Match);
      sinon.stub(Match, 'findOne').resolves(createdMatchMock as Match);
      sinon.stub(Team, 'findAll').resolves(allTeamsMock as Team[]);
      sinon.stub(getRegisteredEmails, 'findAll').resolves({emails: ['admin@admin.com']});
      sinon.stub(jwt, 'verify').resolves({email:'admin@admin.com', role: 'admin'});
    });

    it('Create Match - success', async () => {
        chaiHttpResponse = await chai
          .request(app)
          .post('/matches')
          .set('Authorization', token)
          .send({
            "homeTeam": 1,
            "awayTeam": 2,
            "homeTeamGoals": 2,
            "awayTeamGoals": 3,
            role: 'admin'
          })
        
        expect(chaiHttpResponse).to.have.status(201);
        expect(chaiHttpResponse.body).to.be.deep.equal(createdMatchMock);
      });
    it('Create Match - fail - id not found', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/matches')
        .set('Authorization', token)
        .send({
          "homeTeam": 99,
          "awayTeam": 2,
          "homeTeamGoals": 2,
          "awayTeamGoals": 3,
          role: 'admin'
        })
      
      expect(chaiHttpResponse).to.have.status(404);
      expect(chaiHttpResponse.body).to.be.deep.equal({message: "There is no team with such id!"});
    });
    it('Create Match - fail - teams ids must be different', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/matches')
        .set('Authorization', token)
        .send({
          "homeTeam": 2,
          "awayTeam": 2,
          "homeTeamGoals": 2,
          "awayTeamGoals": 3,
          role: 'admin'
        })
      
      expect(chaiHttpResponse).to.have.status(422);
      expect(chaiHttpResponse.body).to.be.deep.equal({message: "It is not possible to create a match with two equal teams"});
    });
  });

  describe('Finish Match tests', () => {
    beforeEach(async () => {
      sinon.stub(getRegisteredEmails, 'findAll').resolves({emails: ['admin@admin.com']});
      sinon.stub(jwt, 'verify').resolves({email:'admin@admin.com', role: 'admin'});
      sinon.stub(Match, 'update').resolves([1]);
    });

    it('Finish Match - success', async () => {
        chaiHttpResponse = await chai
          .request(app)
          .patch('/matches/1/finish')
          .set('Authorization', token)
        
        expect(chaiHttpResponse).to.have.status(200);
        expect(chaiHttpResponse.body).to.be.deep.equal({ message: "Finished" });
    });
  });

  describe('Update Match tests', () => {
    beforeEach(async () => {
      sinon.stub(getRegisteredEmails, 'findAll').resolves({emails: ['admin@admin.com']});
      sinon.stub(jwt, 'verify').resolves({email:'admin@admin.com', role: 'admin'});
      sinon.stub(Match, 'update').resolves([1]);
    });

    it('Update Match - success', async () => {
        chaiHttpResponse = await chai
          .request(app)
          .patch('/matches/1')
          .set('Authorization', token)
        
        expect(chaiHttpResponse).to.have.status(200);
        expect(chaiHttpResponse.body).to.be.deep.equal({ message: "Ok" });
    });
  });

});
