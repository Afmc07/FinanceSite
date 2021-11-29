const express= require('express');
const bcrypt= require('bcrypt');
const router= express.Router();
const passport= require('passport');

const ensureAuthenticated= require('../middleware/auth');

const AccountRepository = require('../database/repository/Account_repo');
const route = require('.');
const aRepo= new AccountRepository();

const saltRounds= 12;

router.get('/', ensureAuthenticated, (req, res)=>{
    res.render('pages/dashboard', {user: req.user});
});

router.get('/all/new', ensureAuthenticated, async (req, res)=>{
    let options={
        formName: 'Create new',
        transaction: null,
        url: '/dashboard/all',
        action: null,
        type: "nun"
    }
    res.render('pages/Tran_new', {error: null, user: req.user, option: options})
});

router.get('/revenues/new', ensureAuthenticated, async (req, res)=>{
    let options={
        formName: 'Create new',
        transaction: null,
        url: '/dashboard/revenues',
        action: null,
        type: "rev"
    }
    res.render('pages/Tran_new', {error: null, user: req.user, option: options});
});

router.post('/all/new', ensureAuthenticated, async (req, res)=>{
    let id= parseInt(req.body.id);
    let name= req.body.name;
});

module.exports= router;