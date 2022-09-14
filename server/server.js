const express = require("express");
const app = express();
const cors = require("cors");

const routes = require("./routes/category.route");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// using middlewares

app.use(cors());
app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Yor server is running on ${PORT}`);
});
