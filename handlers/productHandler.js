const productService = require("../services/productService");

exports.createProduct = async (req, res) => {
    const product =
        await productService.createProduct(req.body);

    res.json(product);
};

exports.getProducts = async (req, res) => {
    const products =
        await productService.getProducts();

    res.json(products);
};

exports.updateProduct = async (req, res) => {
    const product =
        await productService.updateProduct(
            req.params.id,
            req.body
        );

    res.json(product);
};

exports.deleteProduct = async (req, res) => {
    await productService.deleteProduct(req.params.id);

    res.json({ message: "Product Deleted" });
};
