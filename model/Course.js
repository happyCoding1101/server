const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    courseName: { type: String, required: true },
    description: { type: String },
    standardDuration_day: { type: Number },
    category: { type: String }
});

module.exports = mongoose.model('Course', courseSchema);