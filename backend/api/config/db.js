const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('au_temps_donne', 'root', 'root', {
  host: 'db',
  dialect: 'mysql',
});

sequelize.authenticate().then(() => {
  console.log('Connexion réussie.');
}).catch(err => {
  console.error('Erreur de connexion:', err);
});

module.exports = sequelize;