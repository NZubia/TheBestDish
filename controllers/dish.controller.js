const DisheModel = require('../models/dishes.model').DishModel;

/**
 * Return a Json with a list of dishes in database
 *
 * @param req Actual Request
 * @param res Actual Response
 */
async function list(req, res) {
    let dishList = await DisheModel.find({});
    return res.json(dishList);

}

/**
 * Return a dish by its id
 *
 * @param req Actual Request
 * @param res Actual Response
 */
async function getDish(req, res){

    let dishId = req.query.dishId;

    let dishObj = await DisheModel.find({_id: dishId});
    return res.json(dishObj);
}

/**
 * Create a new Dish
 *
 * @param req Actual Request
 * @param res Actual Response
 */
async function createDish(req, res){

    let dishName = req.body.dishName;
    let dishDescription = req.body.dishDescription;
    let dishPrice = req.body.dishPrice;
    let dishImgSrc = req.body.dishImgSrc;
    let dishType = req.body.dishType;

    let dishObj = await new DisheModel({
        dishName: dishName,
        dishDescription: dishDescription,
        price: dishPrice,
        dishImgSrc: dishImgSrc,
        type: dishType
    }).save();

    return res.json(dishObj);
}

module.exports = {
    getDish,
    createDish,
    list
};