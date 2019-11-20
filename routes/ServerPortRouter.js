const express = require('express');
const app = express();
const ServerPortRouter = express.Router();

const ServerPort = require('../models/ServerPort');

// Creating a POST route for inserting data into db
ServerPortRouter.route('/add').post(function (req, res) {
    const serverport = new ServerPort(req.body);
    serverport.save()
        .then(serverport => {
            res.json('Server added successfully');
        })
        .catch(err => {
            res.status(400).send('unable to save to database');
        });
});

// Creating a GET route for retrieving data from db
ServerPortRouter.route('/').get(function (req, res) {
    ServerPort.find(function (err, serverports) {
        if (err) {
            console.log(err);
        } else {
            res.json(serverports);
        }
    });
});

module.exports = ServerPortRouter;