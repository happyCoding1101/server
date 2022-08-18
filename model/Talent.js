const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const talentSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    talentName: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    linkedIn: {
        type: String
    },
    skills: {
        type: String
    },
    currentEmployer: {
        type: String
    },
    experiences: [
        {
            employer: {type: String},
            title: {type: String},
            start: {type: Date},
            end: {type: Date},
        }
    ],
    education: [
        {
            degree: {type: String},
            school: {type: String},
            major: {type: String},
            graduate_year: {type: Number},
        }
    ],
    DStraining: [
        {
            t_id: {type: String},
            trainingName: {type: String},
            batchNo: {type: Number},
            startDate: {type: Date},
        }
    ]
});

module.exports = mongoose.model('Talent', talentSchema);