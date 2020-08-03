const express = require('express');
const ObjectId = require('mongoose').Types.ObjectId;
const router = express.Router();
const jwtHelper = require('../config/jwtHelper');
const {Todo} = require('../models/todo.model');


router.get('/', jwtHelper.verifyJwtToken, (req, response) => {
    Todo.find({author: req._id}, (err, docs) => {
        if (!err) {
            response.send({status: true, data: docs});
        } else {
            console.log("Error in Retrieving Categories :" + JSON.stringify(err, undefined, 2));
            return response.status(400).json(err);
        }
    });
});


router.post('/', jwtHelper.verifyJwtToken, (req, response) => {
    let todo = new Todo({
        title: req.body.title,
        status: req.body.status,
        author: req._id
    });

    todo.save((err, docs) => {
        if (!err) {
            response.send({status: true, message: "Todo successfully added", data: docs});
        } else {
            console.log("Error in Categories POST :" + JSON.stringify(err, undefined, 2));
            return response.status(400).json(err);

        }
    });
});


router.put('/:id', jwtHelper.verifyJwtToken, (req, response) => {  // /:id <- это то, к чему можно будет стучаться через req.params.id
    if (!ObjectId.isValid(req.params.id)) {
        return response.status(400).send(`No record with given id: ${req.params.id}`);
    }

    let todo = {
        title: req.body.title,
        status: req.body.status
    };

    Todo.updateOne(
        {_id: req.params.id, author: req._id},
        {$set: todo},
        (err, docs) => {
            if (!err) {
                 response.send({status: true, message: "Todo successfully updated", data: docs});
            } else {
                console.log("Damn it! Error in Categories PUT :" + JSON.stringify(err, undefined, 2));
                return response.status(400).json(err);
            }
        });
});


router.delete('/:id', jwtHelper.verifyJwtToken, (req, response) => {
    if (!ObjectId.isValid(req.params.id)) {
        return response.status(400).send(`No record with given id: ${req.params.id}`);
    }

    Todo.deleteOne({_id: req.params.id, author: req._id}, (err, docs) => {
        if (!err) {
            response.send({status: true, message: "Todo successfully deleted", data: docs});
        } else {
            console.log("Damn it! Error in Categories DELETE :" + JSON.stringify(err, undefined, 2));
            return response.status(400).json(err);
        }
    });
});

module.exports = router;
