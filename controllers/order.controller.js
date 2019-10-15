const OrderModel = require('../models/order.model').OrderModel;

/**
 * Create an empty order with client name
 *
 * @param req Actual Request
 * @param res Actual Response
 */
async function createNewOrder(req, res) {
    let clientName = req.body.clientName;

    let newOrder = await new OrderModel({
        clientName: clientName
    }).save();

    return res.json(newOrder);
}

/**
 * Add dish to existing order
 *
 * @param req Actual Request
 * @param res Actual Response
 */
async function addDish(req, res) {
    let orderId = req.body.orderId;
    let dishId = req.body.dishId;

    await OrderModel.updateOne({"_id": orderId}, {
        $push: {
            dishes : dishId
        }
    });

    let updatedOder = await OrderModel.findOne({_id: orderId});

    return res.json(updatedOder);

}

/**
 * Remove dish to existing order
 *
 * @param req Actual Request
 * @param res Actual Response
 */
async function removeDish(req, res) {
    let orderId = req.body.orderId;
    let dishId = req.body.dishId;

    await OrderModel.updateOne({"_id": orderId}, {
        $pull: {
            dishes : dishId
        }
    });

    let updatedOder = await OrderModel.findOne({_id: orderId});

    return res.json(updatedOder);

}

/**
 * Get an order by its Id
 *
 * @param req Actual Request
 * @param res Actual Response
 */
async function getOrder(req, res){

    let orderId = req.query.orderId;

    let orderObj = await OrderModel.findOne({_id: orderId});

    return res.json(orderObj);
}

module.exports = {
    createNewOrder,
    addDish,
    removeDish,
    getOrder
};