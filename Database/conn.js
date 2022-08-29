const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize("apiyt",`${process.env.user}`,`${process.env.pass}`,{
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;