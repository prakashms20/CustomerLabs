// src/controllers/destinationController.js

const { Destination } = require('../models');

// Create Destination
const createDestination = async (req, res) => {
    try {
        const { accountId, url, method, headers } = req.body;
        const destination = await Destination.create({ accountId, url, method, headers });
        res.status(201).json(destination);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Get All Destinations by Account ID
const getDestinations = async (req, res) => {
    try {
        const { accountId } = req.params;
        const destinations = await Destination.findAll({ where: { accountId } });
        res.json(destinations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Get Single Destination by ID
const getDestination = async (req, res) => {
    try {
        const { id } = req.params;
        const destination = await Destination.findByPk(id);
        if (!destination) {
            return res.status(404).json({ error: 'Destination not found' });
        }
        res.json(destination);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Update Destination
const updateDestination = async (req, res) => {
    try {
        const { id } = req.params;
        const { url, method, headers } = req.body;
        const [updated] = await Destination.update({ url, method, headers }, { where: { id } });
        if (updated) {
            const updatedDestination = await Destination.findByPk(id);
            return res.json(updatedDestination);
        }
        throw new Error('Destination not found');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message || 'Server error' });
    }
};

// Delete Destination
const deleteDestination = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Destination.destroy({ where: { id } });
        if (deleted) {
            return res.json({ message: 'Destination deleted successfully' });
        }
        throw new Error('Destination not found');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message || 'Server error' });
    }
};

module.exports = {
    createDestination,
    getDestinations,
    getDestination,
    updateDestination,
    deleteDestination,
};
