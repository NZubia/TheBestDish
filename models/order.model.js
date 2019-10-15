const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    date: { type: Date },
    clientName: {
      type: String,
      required: true
    },
    dishes: {
        type: [mongoose.Schema.ObjectId],
        ref: 'Dish',
        required: true,
        default: []
    },
    total: {
        type: Number,
        required: true,
        default: 0
    }
});

let OrderModel = mongoose.model('Order', orderSchema, 'order');

module.exports = {
    OrderModel
};