// src/controllers/dataHandlerController.js

const { Account, Destination } = require('../models');
const axios = require('axios');

const handleIncomingData = async (req, res) => {
    const appSecretToken = req.headers['cl-x-token'];
    if (!appSecretToken) {
        return res.status(401).json({ error: 'Un Authenticate' });
    }

    try {
        const account = await Account.findOne({ where: { appSecretToken } });
        if (!account) {
            return res.status(401).json({ error: 'Un Authenticate' });
        }

        const destinations = await Destination.findAll({ where: { accountId: account.id } });

        for (const destination of destinations) {
            const { url, method, headers } = destination;
            const options = {
                method,
                url,
                headers,
                data: method.toLowerCase() === 'get' ? undefined : req.body
            };

            if (method.toLowerCase() === 'get') {
                options.params = req.body;
            }

            await axios(options);
        }

        res.json({ message: 'Data processed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    handleIncomingData,
};
