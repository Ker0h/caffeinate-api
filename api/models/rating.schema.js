var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var ratingSchema = new Schema({

    value: {
        type: Number,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    user: {
        type: ObjectId,
        ref: 'user',
        required: true
    },

    date: {
        type: Date,
        required: true
    }
})