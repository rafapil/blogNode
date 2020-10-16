const Sequelize = require('sequelize');

const conn = new Sequelize('blognode', 'root', 'stk456rfs', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = conn;