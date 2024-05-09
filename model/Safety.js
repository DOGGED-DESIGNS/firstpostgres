// const { Client } = require("pg");
const Env = require("dotenv");
const mongoose = require("mongoose");

// const { MongoClient } = require("mongodb");
Env.config({ path: `${__dirname}/../config.env` });

const Scheme = mongoose.Schema;

const schemez = new Scheme({
  id_safety: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
  qunt: {
    type: Number,
    max: 20,
  },

  install: {
    type: String,
    max: 30,
  },

  time: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    max: 100,
  },
});

module.exports = mongoose.model("safety", schemez);
