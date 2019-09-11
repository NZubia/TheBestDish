const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    date: { type: Date },
    clientName: {
      type: String,
      required: true
    },
    dishes: {
        type: [Object],
        required: true,
        default: []
    },
    total: {
        type: Number,
        required: true,
        default: 0
    }
});

/**
 * Class for the Order model.
 */
class OrderClass {
    constructor() {
    }

    showOrder(){}

    getAmountOrder(){}

    addDishToOrder(dish){

    }

    removeDishFromOrder(dish){

    }

    applyDisccontToOrder() {

    }

    applyPromotionsToOrder(promotionCode) {

    }

}

//Load class
orderSchema.loadClass(OrderClass);

let OrderModel = mongoose.model('Order', orderSchema, 'order');

module.exports = {
    OrderModel
}