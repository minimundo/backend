# Mini Mundo - Backend

[![Node version](https://img.shields.io/badge/node-%3E=16.13.1-brightgreen.svg)](https://nodejs.org/en/blog/release/v16.13.1/)

## Install

Ps: to run the project make sure you have node version => 16.13.1 installed. If you have different versions, use nvm to install a corresponding version.

1. Create the appropriate repository: `mkdir minimundo`
2. Move to the appropriate directory: `cd minimundo`.<br />
3. Clone this repository using `git@github.com:minimundo/backend.git`
4. Move to the appropriate directory: `cd backend`.<br />
5. Run `npm install` to install the dependencies.<br />
6. Copy the `.env.example` file to `.env` and set the database environment variables correctly:
   > host, port, user, password, db-name
7. Run `npm run dev` or `node ace serve --watch`

## Deploy

To deploy the application:

1. Run `npm run build`or `node ace build --production` (production).

## Lint and Prettier

1. Run `npm run lint` or `eslint . --ext=.ts` to execute code analyser
2. Run `npm run format` or `prettier --write .` to execute code formatter
