const express = require("express");
const app = express(); //initialize app
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "crud_contact",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); //for client side applications

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO contact_db (name, email, contact) VALUES ('john doe', 'johndoe@test.com', 12341234)";
  db.query(sqlInsert, (error, result) => {
    console.log("error", error);
    console.log("result", result);
  });
  res.send("Hello Express");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
