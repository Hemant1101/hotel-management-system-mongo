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
