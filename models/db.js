const Sequelize = require('sequelize');
  // conexão com o banco de dados MySql
  const sequelize = new Sequelize('postapp', 'root', 'tv123@M4', {
    host: "localhost",
    dialect: 'mysql'
  });

  module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
  }