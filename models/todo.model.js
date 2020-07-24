const mongoose = require('mongoose');


let TodoSchema = new mongoose.Schema({
    title: String,
    status: Number,
    author: String
});

let Todo = mongoose.model('Todo', TodoSchema);


module.exports = {
    Todo: Todo
};
