const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true 
    },
    lng: { 
        type: Number,
        required: true 
    },
    lat: {
        type: Number,
        required: true 
    },
    billboard: { 
        type: String, 
        required: true 
    }
});

const location = mongoose.model('Location',locationSchema)

module.exports = location;