const express = require('express');
const router = express.Router();

const {
    getAllDisbursments,
    createNewDisbursment
} = require('./../controllers/disbursmentController');

router.route('/')
    .get(getAllDisbursments)
    .post(createNewDisbursment);


module.exports = router