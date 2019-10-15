const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order.controller');

/**
 * Add dish to order
 */
router.post('/addDish', orderController.addDish);

/**
 * Remove dish from order
 */
router.post('/removeDish', orderController.removeDish);

/**
 * Create new empty order
 */
router.post('/create', orderController.createNewOrder);

/**
 * Get order by its Id
 */
router.get('/getOrder', orderController.getOrder);

module.exports = router;
