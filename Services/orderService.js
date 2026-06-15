const Order = require("../models/orderModel");

exports.createOrder = (data) =>
    Order.create(data);

exports.getOrders = () =>
    Order.find()
        .populate("userId")
        .populate("productId");
