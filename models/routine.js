const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routineSchema = new Schema({
    day: {
        type: String
    },
    routine:{
        type: String
    },
    duration: {
        type: Number
    },
    startingTime: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
   timestamps: true
});

module.exports = mongoose.model('Routine', routineSchema)