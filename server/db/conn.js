// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("hotelmanagementsystem", "root", "hemant1101", {
//   host: "localhost",
//   dialect: "mysql",
// });

// (async () => {
//   await sequelize.sync({ alter: true });
//   // Code here
// })();

// module.exports = sequelize;

const mongoose = require("mongoose");
const mongoDb = process.env.dbUrl;
mongoose
  .connect(mongoDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successful");
  })
  .catch((error) => {
    console.log("unable to connect with database");
  });
