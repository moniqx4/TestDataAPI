const express = require('express');

const { 
    getTestConfig,
    getTestConfigs,
    createTestConfig,
    updateTestConfig,
    deleteTestConfig
    } = require('../controllers/testconfigs');

const router = express.Router();

router.route('/')
    .get(getTestConfigs)
    .post(createTestConfig);

router.route('/:team')
    .get(getTestConfig)
    .put(updateTestConfig)
    .delete(deleteTestConfig);

module.exports = router;
