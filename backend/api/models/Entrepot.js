const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Entrepot = sequelize.define("entrepots", {
  ID_Entrepot: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  capacite: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ville: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  tableName: "entrepots",
  timestamps: false
});

module.exports = Entrepot;
