const express = require("express");
const router = express.Router();

const productHandler =
    require("../handlers/productHandler");

router.post("/", productHandler.createProduct);
router.get("/", productHandler.getProducts);
router.put("/:id", productHandler.updateProduct);
router.delete("/:id", productHandler.deleteProduct);

module.exports = router;
