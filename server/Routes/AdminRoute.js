const express = require('express');
const router = express.Router();
const { getCredentials } = require('../Controller/AdminController');

router.get('/credentials', getCredentials);

module.exports = router;
