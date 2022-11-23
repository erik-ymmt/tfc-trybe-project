// import * as sinon from 'sinon';
// import * as chai from 'chai';
// // @ts-ignore
// import chaiHttp = require('chai-http');

// import App from '../app';
// import User from '../database/models/User';
// import LoginController from '../controllers/LoginController';

// import { Response } from 'superagent';
// import { userFromDb } from './mocks/userMocks';

// chai.use(chaiHttp);

// const { app } = new App();

// const { expect } = chai;

// const loginController = new LoginController();

// describe('Login Controller tests', () => {
//   let chaiHttpResponse: Response;

//   before(async () => {
//     sinon
//       .stub(loginController, "login")
//       .resolves(userFromDb as User);
//   });

//   afterEach(sinon.restore);

//   it('Login success', async () => {
//     const user = {
//       "email": "user@user.com",
//       "password": "secret_user"
//     };

//     chaiHttpResponse = await chai
//        .request(app)
//        .post('/login')
//        .send(user)

//     expect(chaiHttpResponse).to.be('200');
//     expect(chaiHttpResponse).to.have.status(200);
//   });
// });
