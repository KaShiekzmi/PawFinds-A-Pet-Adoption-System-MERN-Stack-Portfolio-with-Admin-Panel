const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adoptFormSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    livingSituation: {
        type: String,
        required: true
    },
    previousExperience: {
        type: String,
        required: true
    },
    familyComposition: {
        type: String,
        required: true
    },
    petId: {
        type: String,
        required: true
    }
}, { timestamps: true})

module.exports = mongoose.model('AdoptForm', adoptFormSchema)