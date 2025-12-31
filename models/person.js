const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    id: {
      type: Number,
      unique: true,
      required: true,
    },
    work: {
        type: String,
        enum: ['chef','manager','owner','waiter','peon'],
        required: true,
    },
    salary: {
        type: Number,
        required: true
    }
})

const Person = mongoose.model('Person', personSchema);
module.exports = Person;