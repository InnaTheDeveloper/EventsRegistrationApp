console.log("app started");
const express = require("express");
const app = express();
const path = require("path");

const events = require("./routes/events");
const connectDB = require("./db/connect");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
//middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use("/events", events);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`server is listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
