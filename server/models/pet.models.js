const mongoose = require('mongoose');

const PetsSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, "Pet Name is required"],
        minlength: [3, "Pet Name must be at least 3 characters long"]
    },
    petType: {
        type: String,
        required: [true, "Pet Type is required"],
        minlength: [3, "Pet Type must be at least 3 characters long"]
    },
    desc: { 
        type: String,
        required: [true, "Description"],
        minlength: [3, "Description must be at least 3 characters long"]
    },
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String}
}, { timestamps: true });

module.exports.Pet = mongoose.model('Pet', PetsSchema);