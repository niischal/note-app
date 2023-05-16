const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
require("dotenv").config();
let dbConnection = require("./db");
const noteRouter = require("./routes/note.route");
app.use(bodyParser.json());
app.use(cors());
app.use("/note", noteRouter);
app.get("/", (req, res) => {
  res.send("This is from Backend");
});

const port = process.env.PORT;
app.listen(port, () => console.log("Node JS Server Started"));
