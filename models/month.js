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

module.exports = mongoose.model('Month', monthSchema)