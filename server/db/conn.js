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
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((error) => {
    console.log("unable to connect with database");
  });

module.exports = mongoose;
