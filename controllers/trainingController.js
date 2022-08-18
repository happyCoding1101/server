const Training = require('../model/Training');

const getAllTrainings = async (req, res) => {
    const trainings = await Training.find();
    if (!trainings) return res.status(204).json({ 'message': 'No trainings found.' });
    res.json(trainings);
}

const createNewTraining = async (req, res) => {
    if (!req?.body?.id) {
    // if (!req?.body?.email) {
        return res.status(400).json({ 'message': 'Training id is required' });
    }
    // console.log(req.body.experiences)

    try {
        const result = await Training.create({
            id: req.body.id,
            trainingName: req.body.trainingName,
            description: req.body.description,
            category: req.body.category,
            client: req.body.client,
            batchNo: req.body.batchNo,
            NoParticipants: req.body.NoParticipants,
            startDate: req.body.startDate,
            duration_day: req.body.duration_day,
            endDate: req.body.endDate,
            rating: req.body.rating,
            participants: req.body.participants,
            courses: req.body.courses
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

const updateTraining = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const training = await Training.findOne({ id: req.body.id }).exec();
    if (!training) {
        return res.status(204).json({ "message": `No training matches ID ${req.body.id}.` });
    }
    if (req.body?.trainingName) training.trainingName = req.body.trainingName;
    if (req.body?.description) training.description = req.body.description;
    if (req.body?.category) training.category = req.body.category;
    if (req.body?.client) training.client = req.body.client;
    if (req.body?.batchNo) training.batchNo = req.body.batchNo;
    if (req.body?.NoParticipants) training.NoParticipants = req.body.NoParticipants;
    if (req.body?.startDate) training.startDate = req.body.startDate;
    if (req.body?.duration_day) training.duration_day = req.body.duration_day;
    if (req.body?.endDate) training.endDate = req.body.endDate;
    if (req.body?.rating) training.rating = req.body.rating;
    if (req.body?.participants) training.participants = req.body.participants;
    if (req.body?.courses) training.endDate = req.body.courses;
    const result = await training.save();
    res.json(result);
}

const deleteTraining = async (req, res) => {
    if (!req?.body?._id) return res.status(400).json({ 'message': 'Training ID required.' });

    const training = await Training.findOne({ id: req.body.id }).exec();
    if (!training) {
        return res.status(204).json({ "message": `No training matches ID ${req.body.id}.` });
    }
    const result = await training.deleteOne({ id: req.body.id }); //{ id: req.body.id }
    res.json(result);
}

const getTraining = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Training ID required.' });

    const training = await Training.findOne({ id: req.params.id }).exec();
    if (!training) {
        return res.status(204).json({ "message": `No training matches ID ${req.params.id}.` });
    }
    res.json(training);
}

module.exports = {
    getAllTrainings,
    createNewTraining,
    updateTraining,
    deleteTraining,
    getTraining
}