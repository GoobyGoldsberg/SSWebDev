const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema({
    name: {
        type: String
    },
    eduDur: {
        type: Number
    },
    shopDur: {
        type: Number
    },
    browseDur: {
        type: Number
    },
    socialDur: {
        type: Number
    },
    date: {
        type: Date
    }
});

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;