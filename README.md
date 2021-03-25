# SmartPharmacy API

## Requirements

Ensure that you have the following installed:

1. [NodeJS](https://nodejs.org/en/)
2. [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
3. [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

## Getting Started

1. Clone this repository

   ```
   git clone https://github.com/clarencecodes/smartpharmacy_api.git
   ```

2. Install dependencies

   ```
   cd smartpharmacy_api
   npm install
   ```

## Environment Variables

Rename `config/config.env.env` to `config/config.env` and update the values/settings to your own.

## Seeding the database

1. `node seeder -d` to destroy all previous data
2. `node seeder -i` to import data

## Start the server

- `npm run dev` (local, development mode)
- `npm run start` (local, production mode)

## Deploy to Heroku

1. Ensure that you are added as a collaborator to the app in Heroku
2. `git push heroku master` to deploy
