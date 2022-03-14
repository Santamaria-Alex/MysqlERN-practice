const express = require("express");
const app = express(); //initialize app
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); //for client side applications

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
