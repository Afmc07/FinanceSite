const express= require('express');
const route = require('.');
const router= express.Router();

const AccountRepository = require('../database/repository/Account_repo')
const aRepo= new AccountRepository();

router.get("/", (req, res) => {
    res.render('pages/welcome')
});

router.get("/signup", (req, res) => {
    res.render('pages/signup', {error: null, values: null})
});

module.exports=  router;