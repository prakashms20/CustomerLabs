// src/controllers/accountController.js

const { Account } = require('../models');

// Create Account
const createAccount = async (req, res) => {
    try {
        const { email, accountName, website } = req.body;
        const account = await Account.create({ email, accountName, website });
        res.status(201).json(account);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Get All Accounts
const getAccounts = async (req, res) => {
    try {
        const accounts = await Account.findAll();
        res.json(accounts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Get Single Account by ID
const getAccount = async (req, res) => {
    try {
        const { id } = req.params;
        const account = await Account.findByPk(id);
        if (!account) {
            return res.status(404).json({ error: 'Account not found' });
        }
        res.json(account);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Update Account
const updateAccount = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, accountName, website } = req.body;
        const [updated] = await Account.update({ email, accountName, website }, { where: { id } });
        if (updated) {
            const updatedAccount = await Account.findByPk(id);
            return res.json(updatedAccount);
        }
        throw new Error('Account not found');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message || 'Server error' });
    }
};

// Delete Account
const deleteAccount = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Account.destroy({ where: { id } });
        if (deleted) {
            return res.json({ message: 'Account deleted successfully' });
        }
        throw new Error('Account not found');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message || 'Server error' });
    }
};

module.exports = {
    createAccount,
    getAccounts,
    getAccount,
    updateAccount,
    deleteAccount,
};
