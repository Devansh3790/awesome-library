import { Sequelize } from "sequelize-typescript";

import { User, Tweet, Relationship } from "./models";


const env = process.env.NODE_ENV || "development";
const config = require("./config/database")[env];

export const sequelize = new Sequelize(config)

sequelize.addModels([User, Tweet, Relationship])

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error(`Unable to connect to the database: ${err}`);
  });