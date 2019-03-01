const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const multer = require('multer');

const User = require('../models/User');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'images/');
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString() + file.originalname)
    }
});

const filterFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: filterFilter
});

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
                req.session.save();
                
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

users.post('/uploadPhoto', upload.single('image'), (req, res) => {
    console.log('uploading ')
    console.log(req.file)
    console.log(req.body)


    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    // console.log('email: ', decoded.email)
    User.findOne({
        email: decoded.email
    }, "+image").then(user => {
        console.log('updating user');
        user.image = req.file.path;
        console.log('got hereeeee')
        user.save(function (err, product) {
            if (err){
                res.json({error: "Something went wrong "+ err});
            }
            if(product && product._id.equals(decoded._id)){
                console.log('found user', product)
                res.redirect('http://localhost:3000/profile')
            } else {
                // console.log('found user', product._id.equals(decoded._id));
                res.json({error: "User does not exists"})
            }
        });
    }).catch(err => {
        res.json({error: err});
    })
});

users.post('/profile', (req, res) => {
    // console.log('getting profile data')
    console.log('session id: ', req.session._id)
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    // console.log('email: ', decoded.email)
    User.findOne({
        email: decoded.email
    }, "-password -created -__v").then(user => {
        console.log(user)
        if(user && user._id === req.session._id){
            // console.log('found user', user)
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
    }, "-password").then(user => {
        console.log('updating user');
        user.first_name = userData.first_name,
        user.last_name = userData.last_name,
        user.email = userData.email,
        user.gender = userData.gender,
        user.address = userData.address,
        user.city = userData.city,
        user.state = userData.state,
        user.zipcode = userData.zipcode,
        user.bio = userData.bio,
        user.linkedIn = userData.linkedIn,
        user.job_title = userData.job_title
        console.log('got hereeeee')
        user.save(function (err, product) {
            if (err){
                res.json({error: "Something went wrong "+ err});
            }
            if(product && product._id.equals(decoded._id)){
                console.log('found user', product)
                res.json({user: product, status: "Updated User Info"});
            } else {
                // console.log('found user', product._id.equals(decoded._id));
                res.json({error: "User does not exists"})
            }
        });
    }).catch(err => {
        res.json({error: err});
    })
})
module.exports = users;