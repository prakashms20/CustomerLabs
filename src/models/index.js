// models/index.js

const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect: 'postgres',
        port: process.env.DATABASE_PORT,
    }
);

const Account = require('./Account')(sequelize);
const Destination = require('./Destination')(sequelize);

// Define associations if necessary
Account.hasMany(Destination, { foreignKey: 'accountId', onDelete: 'CASCADE' });
Destination.belongsTo(Account, { foreignKey: 'accountId' });

module.exports = {
    sequelize,
    Account,
    Destination,
};
