const express = require("express");
// const cors = require("cors");
require("dotenv").config();

const app = express();
const dbConnection = require("./db");
const noteRouter = require("./routes/note.route");
// app.use(cors);
app.use(express.json());
app.use("/note", noteRouter);
app.get("/", (req, res) => {
  res.send({
    message: "Api is working",
  });
});

const port = process.env.PORT;
app.listen(port, async () => {
  console.log("Server is running on port number", port);
});
