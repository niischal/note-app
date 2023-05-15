const mongoose = require("mongoose");

require("dotenv").config();
var mongoDBURL = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.8muvght.mongodb.net/note-app`;

mongoose.connect(mongoDBURL);

var dbconnect = mongoose.connection;

dbconnect.on("error", () => {
  console.log("MongoDB connection Failed");
});
dbconnect.on("connected", () => {
  console.log("MongoDB connection Successful");
});

module.exports = mongoose;
