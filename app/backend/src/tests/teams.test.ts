import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Response } from 'superagent';

import App from '../app';
import Team from '../database/models/Team';
import { allTeamsMock, teamMock } from './mocks/teamsMock';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe.only('Teams endpoint tests', () => {
  let chaiHttpResponse: Response;

  afterEach(sinon.restore);

  describe('Get All Teams tests', () => {
    beforeEach(async () => {
      sinon.stub(Team, 'findAll').resolves(allTeamsMock as Team[]);
      sinon.stub(Team, 'findOne').resolves(teamMock as Team);
    });

    it('Get all teams - success', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/teams')
      
      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(allTeamsMock);
    });

    it('Get id 1 team - success', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/teams/1')
      
      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(teamMock);
    });
  });
});
