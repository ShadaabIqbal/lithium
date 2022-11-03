const productModel = require("../MODELS/productModel");
const userModel = require("../MODELS/userModel");
const orderModel = require("../MODELS/orderModel");
const { isValidObjectId } = require("mongoose");


const newProduct = async function(req,res) {
    let productData = req.body;
    let savedProduct = await productModel.create(productData);
    return res.send({msg: savedProduct});
}

const newUser = async function(req,res) {
    let userData = req.body;
    let savedUser = await userModel.create(userData);
    return res.send({msg: savedUser});
}

const newOrder = async function(req,res) {
    let orderData = req.body;
    let {userId, productId} = orderData;
    if (!isValidObjectId(userId)) {
        return res.send({msg: "user id is not a valid objectId"})
    }
    if (!isValidObjectId(productId)) {
        return res.send({msg: "product id is not a valid objectId"})
    }

    let savedOrder = await orderModel.create(orderData);
    let allOrders = await orderModel.find().populate('userId').populate('productId');
    console.log(savedOrder);
    let orders = [];
    for (let i = 0; i < allOrders.length; i++) {
        const eachOrder = allOrders[i];
        if (eachOrder.isFreeAppUser == true) {
            eachOrder.productId.price = 0;
        } else if (eachOrder.isFreeAppUser == false) {
            eachOrder.amount = eachOrder.productId.price;
            orders.push(eachOrder);
        }
    }

     for (let i = 0; i < orders.length; i++) {
        const eachOrder3 = orders[i];
        if (eachOrder3.productId.price > eachOrder3.userId.balance) {
            return res.send({msg: "insufficient funds"})
        }
     }

    let orders2 = [];
    for (let i = 0; i < orders.length; i++) {
        const eachOrder2 = orders[i];
        eachOrder2.userId.balance = eachOrder2.userId.balance - eachOrder2.amount;
        orders2.push(eachOrder2);
    }
   return res.send({msg: orders2});
}



module.exports.newProduct = newProduct;
module.exports.newUser = newUser;
module.exports.newOrder = newOrder;

