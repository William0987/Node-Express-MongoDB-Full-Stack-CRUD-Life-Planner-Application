const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const yearSchema = new Schema({
    year: {
        type: String
    },
    goal: {
        type: String
    },
    description: {
        type: String
    },
    priority: {
        type: String
    },
    completed: {
        type: String
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Year", yearSchema);