var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Rating = require('./rating.schema');
const Location = require('./lacation.schema');

var coffeeSchema = new Schema({
    variety: {
        type: String,
        enum: ['plain coffee', 'americano', 'cappuccino', 'espresso', 'lungo', 'latte machiato', 'iced coffee'],
        default: 'plain coffee'
    },
    
    ratings: {
        type: [Rating. ratingSchema]
    },

    location: {
        tpe: Location.locationSchema
    }
})

const Coffee = mongoose.model('coffee', coffeeSchema);

module.exports = {
    Coffee,
    coffeeSchema
}