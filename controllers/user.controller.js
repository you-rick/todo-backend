const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const jwtHelper = require('../config/jwtHelper');
const _ = require('lodash');

let router = express.Router();
let {User} = require('../models/user.model');


router.post('/register', (req, res, next) => {
    let user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        address: req.body.address,
        birthday: req.body.birthday,
        phone: req.body.phone
    });

    user.save((err, docs) => {
        if (!err)
            return res.status(200).json({status: true, message: "successful registration"});
        else {
            if (err.code === 11000 || err.errors.username.kind === 'unique') {
                res.status(422).send({message: 'Duplicate username found.'});
            } else {
                return res.status(400).json(err);
            }
        }
    });
});


router.post('/login', (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(400).json(err);
        } else if (user) {
            return res.status(200).json({status: true, 'token': user.generateJwt(user._id)});
        }
        else {
            return res.status(404).json(info);
        }
    })(req, res, next);
});


router.get('/profile', jwtHelper.verifyJwtToken, (req, res, next) => {
    User.findOne({_id: req._id}, (err, user) => {
        if (!user) {
            return res.status(404).json({status: false, message: 'User record not found'});
        } else {
            return res.status(200).json({
                status: true,
                user: _.pick(user, ['_id', 'name', 'username', 'address', 'birthday', 'phone'])
            });
        }
    });
});


module.exports = router;
