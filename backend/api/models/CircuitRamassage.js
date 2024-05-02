const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Partenaire = require("./Partenaire"); // Import the Partenaire model

const CircuitRamassage = sequelize.define("circuit_ramassage", {
  ID_Circuit_Ramassage: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date_circuit: {
    type: DataTypes.DATE,
    allowNull: false
  },
  heure_circuit: {
    type: DataTypes.TIME,
    allowNull: false
  }
}, {
  tableName: "circuit_ramassage",
  timestamps: false
});

module.exports = CircuitRamassage;
