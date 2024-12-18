// routes/orders.js
const express = require("express");
const router = express.Router();
const { Order, Book, User } = require("../models");
const auth = require("../middleware/auth");

// GET /api/orders/:userId
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  const userExists = await User.findByPk(userId);
  if (!userExists) {
    return res.status(404).json({ error: "User not found" });
  }

  // Pobierz zamówienia użytkownika
  const orders = await Order.findAll({
    where: { userId },
  });

  res.json(orders);
});

// POST /api/orders (zabezpieczone)
router.post("/", auth, async (req, res) => {
  const { bookId, quantity } = req.body;
  if (!bookId || !quantity)
    return res.status(400).json({ error: "bookId and quantity required" });

  if (quantity <= 0) {
    return res.status(400).json({ error: "Quantity must be greater than 0" });
  }

  const book = await Book.findByPk(bookId);
  if (!book) return res.status(404).json({ error: "Book not found" });

  const order = await Order.create({
    userId: req.user.userId,
    bookId,
    quantity,
  });
  res.json({ orderId: order.id });
});

// DELETE /api/orders/:orderId (zabezpieczone)
router.delete("/:orderId", auth, async (req, res) => {
  const { orderId } = req.params;
  const order = await Order.findByPk(orderId);
  if (!order) return res.status(404).json({ error: "Order not found" });

  if (order.userId !== req.user.userId)
    return res.status(403).json({ error: "Not allowed" });
  await order.destroy();
  res.json({ message: "Order deleted" });
});

// PATCH /api/orders/:orderId (zabezpieczone)
router.patch("/:orderId", auth, async (req, res) => {
  const { orderId } = req.params;
  const { quantity } = req.body;

  const order = await Order.findByPk(orderId);
  if (!order) return res.status(404).json({ error: "Order not found" });

  if (order.userId !== req.user.userId)
    return res.status(403).json({ error: "Not allowed" });

  if (quantity) order.quantity = quantity;
  await order.save();

  res.json(order);
});

module.exports = router;
