const mongoose = require("mongoose");

async function main(url) {
  await mongoose.connect(url);
}

const connectDB = (url) => {
  main(url)
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => console.log(err));
};

module.exports = connectDB;
