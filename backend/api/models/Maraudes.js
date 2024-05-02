const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Maraudes = sequelize.define('maraudes', {
  ID_Maraude: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date_maraude: {
    type: DataTypes.DATE,
    allowNull: false
  },
  heure_maraude: {
    type: DataTypes.TIME,
    allowNull: false
  }
}, {
  timestamps: false // Disable Sequelize's default timestamps
});

module.exports = Maraudes;