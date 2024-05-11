console.log("app started");
const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const events = require("./routes/events");

//middleware
app.use("/events", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use("/events", events);

app.listen(PORT, console.log(`server is listening on port ${PORT}`));
