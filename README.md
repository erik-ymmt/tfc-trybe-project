## Trybe Football Club Project

![p_tfc-min](https://user-images.githubusercontent.com/92269952/204955058-d6bb3afe-90d7-4373-b153-963495627c71.png)
[Deploy Link](https://tfc-erik.netlify.app/)

## About
&nbsp;&nbsp; This project developed a RESTful API for a football tournament. It was implemented with Models, Services, and Controller(MSC) architecture. Its concept was made by [Trybe](https://www.betrybe.com/).
	
## Files:
&nbsp;&nbsp; Trybe developed all the front-end and the basic initial setup (package.json, docker-compose.yml and so on).

&nbsp;&nbsp; Files developed by me:
- Dockerfiles;
- everything on the app/backend/src folder.

## Technologies:
Technologies applied by me on this project:
- Typescript;
- Express;
- Sequelize;
- Mocha;
- Chai;
- MySQL;
- Docker;
- Railway (database and backend) and Netlify (frontend) for deploy

## How to run the project in your machine (with docker):
- Make sure you have docker installed with versions 1.29 or higher;
- Git clone the repository;
- Run all containers (database, front-end, back-end) with `npm run compose:up:dev`;
- You are ready to run the application, access `http://localhost:3000/`; 

OBS.: Since the project is running on a free version of Railway some services might be unavailable at the end of a month (database and backend were deployed on Railway)
