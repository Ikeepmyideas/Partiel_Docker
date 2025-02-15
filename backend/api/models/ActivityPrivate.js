const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Lieu = require('./Lieu');
const Service = require('./Service');
const Volunteer = require('./Volunteer');
const Beneficiary = require('./Beneficiary');


const ActivityPrivate = sequelize.define('activites_prives', {
  ID_Activite: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  description: { type: Sequelize.TEXT, allowNull: false },
  date_activite: { type: Sequelize.DATE, allowNull: false },
  heure_debut: { type: Sequelize.TIME, allowNull: false },
  heure_fin: { type: Sequelize.TIME },
  titre: { type: Sequelize.STRING(100), allowNull: false },
  id_lieu: { type: Sequelize.INTEGER },
  nom_service: { type: Sequelize.STRING(100) },
  id_beneficiaire: { type: Sequelize.INTEGER },
  id_benevole: { type: Sequelize.INTEGER }
}, {
  timestamps: false
});

//ActivityPrivate.belongsTo(Lieu, { foreignKey: 'adresse' });
ActivityPrivate.belongsTo(Beneficiary, { foreignKey: 'id_benevole' });
ActivityPrivate.belongsTo(Volunteer, { foreignKey: 'id_beneficiaire' });

module.exports = ActivityPrivate;