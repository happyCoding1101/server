const Talent = require('../model/Talent');

const getAllTalents = async (req, res) => {
    const talents = await Talent.find();
    if (!talents) return res.status(204).json({ 'message': 'No talents found.' });
    res.json(talents);
}

const createNewTalent = async (req, res) => {
    if (!req?.body?.id || !req?.body?.email) {
    // if (!req?.body?.email) {
        return res.status(400).json({ 'message': 'ID and email are required' });
    }
    // console.log(req.body.experiences)

    try {
        const result = await Talent.create({
            id: req.body.id,
            email: req.body.email,
            talentName: req.body.talentName,
            client: req.body.client,
            title: req.body.title,
            linkedIn: req.body.linkedIn,
            experiences: req.body.experiences,
            education: req.body.education,
            DStraining: req.body.DStraining,
            skills: req.body.skills,
            currentEmployer: req.body.currentEmployer
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}



const updateTalent = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const talent = await Talent.findOne({ id: req.body.id }).exec();
    if (!talent) {
        return res.status(204).json({ "message": `No talent matches ID ${req.body.id}.` });
    }
    if (req.body?.talentName) talent.talentName = req.body.talentName;
    if (req.body?.client) talent.client = req.body.client;
    if (req.body?.title) talent.title = req.body.title;
    if (req.body?.linkedIn) talent.linkedIn = req.body.linkedIn;
    if (req.body?.experiences) talent.experiences = req.body.experiences;
    if (req.body?.education) talent.education = req.body.education;
    if (req.body?.DStraining) talent.DStraining = req.body.DStraining;
    if (req.body?.skills) talent.skills = req.body.skills;
    if (req.body?.currentEmployer) talent.currentEmployer = req.body.currentEmployer;
    const result = await talent.save();
    res.json(result);
}

const deleteTalent = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ 'message': 'Talent ID required.' });

    const talent = await Talent.findOne({ id: req.body.id }).exec();
    if (!talent) {
        return res.status(204).json({ "message": `No talent matches ID ${req.body.id}.` });
    }
    const result = await talent.deleteOne({ id: req.body.id }); //{ id: req.body.id }
    res.json(result);
}

const getTalent = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Talent ID required.' });

    let stringId = '' + req.params.id

    const talent = await Talent.findOne({ id: stringId }).exec();
    if (!talent) {
        return res.status(204).json({ "message": `No talent matches ID ${req.params.id}.` });
    }
    res.json(talent);
}

module.exports = {
    getAllTalents,
    createNewTalent,
    updateTalent,
    deleteTalent,
    getTalent
}