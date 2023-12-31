const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const yearSchema = new Schema({
    year: {
        type: Number
    },
    goal: {
        type: String
    },
    descriptionGoal: {
        type: String
    },
    priority: {
        type: String
    },
    completedCheck: {
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

module.exports = mongoose.model("Year", yearSchema);