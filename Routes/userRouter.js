const express = require('express');
const { signup, login, dashboard, logout } = require('../controller/userController');

const router = express.Router();

router.get('/register', (req, res) => res.render('register'));

router.post('/register', signup);

router.get('/login', (req, res) => res.render('login'));

router.post('/login', login);

router.get('/dashboard', dashboard);

router.get('/logout', logout);

module.exports = router;
