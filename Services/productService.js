const Product = require("../models/productModel");

exports.createProduct = (data) =>
    Product.create(data);

exports.getProducts = () =>
    Product.find();

exports.getProductById = (id) =>
    Product.findById(id);

exports.updateProduct = (id, data) =>
    Product.findByIdAndUpdate(id, data, { new: true });

exports.deleteProduct = (id) =>
    Product.findByIdAndDelete(id);
