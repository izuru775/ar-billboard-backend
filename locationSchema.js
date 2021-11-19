const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name : {type: String, required: true},
    long: {type: Number, required: true},
    lat: {type: Number, required: true},
    billboard : {type: String, required:true},
    description : String
});


