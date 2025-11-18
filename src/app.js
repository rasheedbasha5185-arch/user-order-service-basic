const express = require("express");
const userRoutes = require("./routes/user.routes");
const orderRoutes = require("./routes/order.routes");

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("User-Order Basic Service is running...");
});

module.exports = app;
