// app.js
require("dotenv").config();
const express = require("express");
const app = express();
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");
const ordersRouter = require("./routes/orders");

app.use(express.json());

app.use("/api", usersRouter);
app.use("/api/books", booksRouter);
app.use("/api/orders", ordersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
