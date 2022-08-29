const { DataTypes } = require("sequelize");
const db = require("../Database/conn");

const Car = db.define("Car", {
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  newsletter: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = Car;
