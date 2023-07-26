const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monthSchema = new Schema({
    month: {
        type: String
    },
    plan:{
        type: String
    },
    dayNumber: {
        type: Number
    },
    daySpan: {
        type: Number
    },
    completed: {
        type: String
    }
}, {
   timestamps: true
});

module.exports = mongoose.model('Month', monthSchema)