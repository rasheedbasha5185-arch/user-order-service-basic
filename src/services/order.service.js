const { orders } = require("../data/orders");
const userService = require("./user.service");

class OrderService {
  getAllOrders() {
    return orders;
  }

  createOrder(data) {
    const user = userService.getUserById(data.userId);
    if (!user) {
      throw new Error("Invalid userId. User does not exist.");
    }

    const newOrder = {
      id: orders.length + 1,
      userId: data.userId,
      product: data.product,
      quantity: data.quantity
    };

    orders.push(newOrder);
    return newOrder;
  }

  getOrdersByUserId(userId) {
    return orders.filter((o) => o.userId === userId);
  }
}

module.exports = new OrderService();
