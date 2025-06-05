const express = require('express');
const router = express.Router();

const {getAllDisbursments} = require('./../controllers/disbursmentController');

router.get('/',getAllDisbursments);

module.exports = router