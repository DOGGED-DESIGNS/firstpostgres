const Env = require("dotenv");
const mongoose = require("mongoose");
Env.config({ path: `${__dirname}/../config.env` });

//MongoDB Connection URI
const uri = "mongodb://localhost:27017/dogged";

// connect the mongodb

const connect = async () => {
  // console.log(process.env.URI);
  try {
    await new mongoose.connect(process.env.URI);
  } catch (error) {
    throw Error(error);
  }
};

module.exports = {
  connect,
};
