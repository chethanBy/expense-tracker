const express = require("express");
const app = express();
const cors = require("cors");

const routes = require("./routes/category.route");
require("dotenv").config();
const connectToMongoDB = require("./db/mongoDB");

const PORT = process.env.PORT || 5000;

// using middlewares
connectToMongoDB().then((db) => {
  if (!db) return process.exit(1);
  console.log("DB Connected");
  // listen to the http server
  app.listen(PORT, () => {
    console.log(`Yor server is running on ${PORT}`);
  });

  app.on("error", (err) =>
    console.log(`Failed To Connect with HTTP Server : ${err}`)
  );
});

app.use(cors());
app.use(express.json());

app.use("/", routes);
