const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Partenaire = require("./Partenaire");

const PartenaireCircuit = sequelize.define("commercant_circuit", {
    ID_Commercant_Circuit: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ID_Commercant: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "commercants_partenaire",
        key: "ID_Commercant"
      }
    },
    ID_Circuit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "circuit_ramassage",
        key: "ID_Circuit_Ramassage"
      }
    },
  }, {
    tableName: "commercant_circuit",
    timestamps: false
  });
  

module.exports = PartenaireCircuit;
