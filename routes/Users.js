const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');

process.env.SECRET_KEY = 'secret';

users.post('/register', (req, res) => {
    const today = new Date();

    //output this into the Helper function
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: zipcode,
        created: today,
    };

    User.findOne({
        email: userData.email
    }).then( user => {
        if(!user){
            bcrypt.hash(userData.password, 14, (err, hash) => {
                userData.password = hash;
                User.create(userData).then(user => {
                    res.json({status: user.email + ' registered'})
                }).catch(err => {
                    res.send('error: ' + err);
                })
            })
        } else{
            res.json({error: 'User already exists'});
        }
    }).catch(err => {
        res.send('error: ' + err);
    })
})