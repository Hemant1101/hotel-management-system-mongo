require("dotenv").config();
const express = require("express");
const app = express();
require("./server/db/conn"); //for mongo
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./server/router/user-router");
// const { admin, router } = require("./server/admin/admin-option");

const corsOptions = {
  origin: true,
  credential: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    status: 200,
    message: "Server running at 5000 port",
    url: "http://localhost:5000",
  });
});

app.use("/", userRoute);
// app.use(admin.options.rootPath, router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
