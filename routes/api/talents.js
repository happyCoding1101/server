const express = require('express');
const router = express.Router();
const talentsController = require('../../controllers/talentsController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(talentsController.getAllTalents)

    // .post(talentsController.createNewTalent)
    // .put(talentsController.updateTalent)
    // .delete(talentsController.deleteTalent)

    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), talentsController.createNewTalent)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), talentsController.updateTalent)
    .delete(verifyRoles(ROLES_LIST.Admin), talentsController.deleteTalent);

router.route('/:id')
    .get(talentsController.getTalent);

module.exports = router;