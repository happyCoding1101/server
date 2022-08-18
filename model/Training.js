const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainingSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    trainingName: { type: String, required: true },
    description: { type: String },
    category: { type: String },
    client: { type: String, required: true },
    batchNo: { type: Number, required: true },
    noParticipants: { type: Number },
    startDate: { type: Date, required: true },
    duration_day: {type: Number},
    endDate: { type: Date, required: true },
    rating: { type: Number},
    // participants: [ 
    //     { type: ObjectId, ref: "Talent" }
    // ],
    participants: [ 
        { 
            id: {type: String}, 
            talentName: {type: String}, 
            email: {type: String}
        }
    ],
    courses: [ 
        {
            c_id: {type: String}, 
            i_id: {type: String}, 
            instructor: {type: String}
        }
    ]
    // courses: [ 
    //     { type: ObjectId, ref: "Course" }
    // ]
});

module.exports = mongoose.model('Training', trainingSchema);