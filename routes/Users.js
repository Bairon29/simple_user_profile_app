const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');

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
        zipcode: req.body.zipcode,
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
});

users.post('/login', (req, res) => {
    const userData = {
        email: req.body.email,
        password: req.body.password
    };
    User.findOne({
        email: userData.email
    }).then(user => {
        if(user){
            if(bcrypt.compareSync(userData.password, user.password)){
                const payload = {
                    _id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email
                }
                let token = jwt.sign(payload, process.env.SECRET_KEY, {
                    expiresIn: '24h'
                })
                req.session._id = payload._id;
                req.session.token = token;
                res.send(token);
            } else {
                res.json({error: "User does not exists"})
            }
        } else {
            res.json({error: "User does not exists"})
        }
    }).catch( err => {
        res.send('error: ' + err);
    })
});
module.exports = users;