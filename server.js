const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5100;

var users = require('./routes/Users');
const TWENTY_HOURS = 1000 * 60 * 60 * 24;

const {
    NODE_ENV = 'devlopement',

    SESS_NAME = 'sid',
    SESS_SECRET = 'secret',
    SESS_LIFETIME = TWENTY_HOURS
} = process.env;

const IN_PROP = NODE_ENV === 'production';

app.use(session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESS_SECRET,
    cookie: {
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROP
    }
}))
app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

const mongoURI = 'mongodb://localhost:27017/userprofiledata';

mongoose.connect(mongoURI, {useNewUrlParser: true})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('error: ' + err));

app.use('/users', users);

//Ready for production
// if (process.env.NODE_ENV === 'production') {
//     // Serve any static files
//     app.use(express.static(path.join(__dirname, 'client/build')));
//     // Handle React routing, return all requests to React app
//     app.get('*', function(req, res) {
//       res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//     });
// }

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
})