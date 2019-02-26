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
                    res.json({error: err});
                })
            })
        } else{
            res.json({error: 'User already exists'});
        }
    }).catch(err => {
        res.json({error: err});
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
                res.json({token, email: payload.email});
            } else {
                res.json({error: "User does not exists"})
            }
        } else {
            res.json({error: "User does not exists"})
        }
    }).catch( err => {
        res.json({error: err});
    })
});

users.post('/hasAccess', (req, res) => {
    console.log('on access', req.session.token === req.body.token)
   if(req.session.token === req.body.token){
       res.json({status: true});
   } else {
    res.json({status: false})
   }
});

users.post('/profile', (req, res) => {
    console.log('getting profile data')
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    console.log('email: ', decoded.email)
    User.findOne({
        email: decoded.email
    }, "-password -_id -created -__v").then(user => {
        if(user && user._id === req.session._id){
            console.log('found user', user)
            res.json({user: user, status: "Retrieving User Info"});
        } else {
            res.json({error: "User does not exists"})
        }
    }).catch(err => {
        res.json({error: err});
    })
})

users.post('/update', (req, res) => {
    console.log('update profile data')
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        bio: req.body.bio,
        linkedIn: req.body.linkedIn,
        job_title: req.body.job_title
    };
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    console.log('email: ', decoded.email)
    User.findOne({
        email: decoded.email
    }, "-password -_id -created -__v").then(user => {

        user.first_name = req.body.first_name,
        user.last_name = req.body.last_name,
        user.email = req.body.email,
        user.gender = req.body.gender,
        user.address = req.body.address,
        user.city = req.body.city,
        user.state = req.body.state,
        user.zipcode = req.body.zipcode,
        user.bio = req.body.bio,
        user.linkedIn = req.body.linkedIn,
        user.job_title = req.body.job_title
        user.save(function (err, product) {
            if (err){
                res.json({error: "Something went wrong "+ err});
            }
            if(user && user._id === req.session._id){
                console.log('found user', user)
                res.json({user: user, status: "Updated User Info"});
            } else {
                res.json({error: "User does not exists"})
            }
        });
    }).catch(err => {
        res.json({error: err});
    })
})
module.exports = users;