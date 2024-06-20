// models/Account.js

const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
    const Account = sequelize.define('Account', {
        id: {
            type: DataTypes.UUID,
            defaultValue: uuidv4,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        accountName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        appSecretToken: {
            type: DataTypes.STRING,
            defaultValue: uuidv4,
        },
        website: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    return Account;
};
