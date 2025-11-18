const orderService = require("../services/order.service");

exports.getAllOrders = (req, res) => {
  res.json(orderService.getAllOrders());
};

exports.createOrder = (req, res) => {
  try {
    const order = orderService.createOrder(req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getOrdersByUser = (req, res) => {
  const userId = parseInt(req.params.userId);
  const orders = orderService.getOrdersByUserId(userId);
  res.json(orders);
};
