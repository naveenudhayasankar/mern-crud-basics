const AppToDo = require("../models/models");

exports.createOneToDo = (req, res) => {
    AppToDo.create(req.body)
        .then((todo) => {
            console.log({todo});
            res.json({
                message: "Successfully added an item", 
                todo,
            });
        })
        .catch((err) => {
            res.status(404).json({
                message: "Error while adding item", 
                error: err.message,
            });
        });
};

exports.listAllToDo = (req, res) => {
    AppToDo.find()
        .then((todo) => {
            console.log({todo});
            res.json(todo);
        })
        .catch((err) => {
            res.status(404).json({
                message: "Cannot find items", 
                error: err.message,
            });
        });
};

exports.updateOneToDo = (req, res) => {
    AppToDo.findByIdAndUpdate(req.params.id, req.body)
        .then((todo) => {
            console.log({todo});
            res.json({
                message: "Successfully updated item", 
                todo,
            });
        })
        .catch((err) => {
            res.status(404).json({
                message: "Cannot update item",
                error: err.message,
            });
        });
};

exports.deleteToDo = (req, res) => {
    App.AppToDo.findByIdAndRemove(req.params.id, req.body)
        .then((todo) => {
            console.log({todo});
            res.json({
                message: "Successfully deleted item",
                todo,
            });
        })
        .catch((err) => {
            res.status(404).json({
                message: "Cannot delete item",
                error: err.message,
            });
        });
};