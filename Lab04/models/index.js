// models/index.js
const sequelize = require('../config/db');
const User = require('./user');
const Book = require('./book');
const Order = require('./order');

User.hasMany(Order, { foreignKey: 'userId', onDelete: 'CASCADE' });
Order.belongsTo(User, { foreignKey: 'userId' });

Book.hasMany(Order, { foreignKey: 'bookId', onDelete: 'CASCADE' });
Order.belongsTo(Book, { foreignKey: 'bookId' });

(async () => {
  await sequelize.sync({ alter: true });
  console.log("Database synced");
})();

module.exports = {
  User,
  Book,
  Order,
  sequelize
};