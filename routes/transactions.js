const { addBudget, getBudgets, deleteBudget, editBudget } = require('../Controllers/budget');
const { addAccount, getAccounts, deleteAccount, editAccount } = require('../Controllers/account');

const router = require('express').Router();


router.post('/add-budget', addBudget)
    .get('/get-budgets', getBudgets)
    .delete('/delete-budget', deleteBudget)
    .post('/edit-budget', editBudget)
    .post('/add-account', addAccount)
    .get('/get-accounts', getAccounts)
    .delete('/delete-account', deleteAccount)
    .post('/edit-account', editAccount)

module.exports = router

