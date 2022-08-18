const express = require('express');
const router = express.Router();
const trainingController = require('../../controllers/trainingController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(trainingController.getAllTrainings)

    // .post(trainingController.createNewTraining)
    // .put(trainingController.updateTraining)
    // .delete(trainingController.deleteTraining)
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), trainingController.createNewTraining)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), trainingController.updateTraining)
    .delete(verifyRoles(ROLES_LIST.Admin), trainingController.deleteTraining);

router.route('/:id')
    .get(trainingController.getTraining);

module.exports = router;