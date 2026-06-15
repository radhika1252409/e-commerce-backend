const express = require("express");
const router = express.Router();

const orderHandler =
    require("../handlers/orderHandler");

router.post("/", orderHandler.createOrder);
router.get("/", orderHandler.getOrders);

module.exports = router;
