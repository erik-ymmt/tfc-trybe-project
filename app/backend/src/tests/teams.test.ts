import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Response } from 'superagent';

import App from '../app';
import { allTeamsMock } from './mocks/teamsMock';
import TeamsModel from '../models/TeamsModel';
import TeamsService from '../services/TeamsService';
import Team from '../database/models/Team';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe.only('Teams endpoint tests', () => {
  let chaiHttpResponse: Response;

  afterEach(sinon.restore);

  describe('Get All Teams tests', () => {
    beforeEach(async () => {
      const teamsModel = new TeamsModel();
      const teamsService = new TeamsService(teamsModel);
      sinon.stub(teamsModel, 'findAll').resolves(allTeamsMock as Team[]);
      sinon.stub(teamsService, 'findAll').resolves(allTeamsMock);
    });

    it('Get all teams - success', async () => {

      chaiHttpResponse = await chai
        .request(app)
        .get('/teams')
      
      expect(chaiHttpResponse).to.have.status(200);

      // ele está instanciando fora, nao consegui mockar a instancia, como fazer?
      // expect(chaiHttpResponse.body).to.be.deep.equal(allTeamsMock);
    });

    it('Get id 1 team - success', async () => {

      chaiHttpResponse = await chai
        .request(app)
        .get('/teams/1')
      
      expect(chaiHttpResponse).to.have.status(200);
      // ele está instanciando fora, nao consegui mockar a instancia, como fazer?
      // expect(chaiHttpResponse.body).to.be.deep.equal(allTeamsMock);
    });
  });

  // describe('tests', () => {
  // });
});
