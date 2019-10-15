const express = require('express');
const router = express.Router();

const dishController = require('../controllers/dish.controller');

/**
 * get list of dishes in database
 */
router.get('/list', dishController.list);

/**
 * Get dish by its Id
 */
router.get('/get', dishController.getDish);

/**
 * Create new dish
 */
router.post('/create', dishController.createDish);

module.exports = router;
