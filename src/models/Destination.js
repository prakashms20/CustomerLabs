// models/Destination.js

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Destination = sequelize.define('Destination', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        accountId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        method: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        headers: {
            type: DataTypes.JSON,
            allowNull: false,
        },
    });

    return Destination;
};
