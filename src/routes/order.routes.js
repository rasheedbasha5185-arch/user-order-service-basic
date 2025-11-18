const express = require("express");
const { getAllOrders, createOrder, getOrdersByUser } = require("../controllers/order.controller");

const router = express.Router();

router.get("/", getAllOrders);
router.post("/", createOrder);
router.get("/user/:userId", getOrdersByUser);

module.exports = router;
