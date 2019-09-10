const describe = require('mocha').describe;
const it = require('mocha').it;
const { expect } = require('chai');

const OrderModel = require("../models/order.model").OrderModel;


describe('Order', function(){

    describe('Displays the order', function () {
        describe('Given that the order is empty', function() {
            it('will show no order items', function(){
                let newOrder = new OrderModel({
                    clientName: 'Client 1',
                    dishes: [],
                    total: 0
                });

                let result = newOrder.showOrder();

                expect(result).to.be.deep.equal([]);
                expect(result).to.be.empty;
                expect(result).to.have.lengthOf(0);
            });
            it('will show 0 as total price', function () {
                // Check if result is number

                // Check if the result is 0 with equal, above and below

            });
            it('will be possible to add a dish', function () {
                // Use include to check if dish was added to the order
            });
            it('will not be possible to remove a dish', function () {
                // Use include to check if dish was removed to the order
            });
        });

        describe('Given that the order contains dishes', function() {
            it('will show every dish on the order');
            it('will show the sum of the unit prices as total price');
            it('will be possible to add a dish');
            it('will be possible to remove a dish');
        });
    });
});
