// const { Client } = require("pg");
const Env = require("dotenv");
const mongoose = require("mongoose");

// const { MongoClient } = require("mongodb");
Env.config({ path: `${__dirname}/../config.env` });

const Scheme = mongoose.Schema;

const schemez = new Scheme({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    max: 20,
  },
  location: {
    type: String,

    max: 225,
  },
  tell: {
    type: String,
    max: 225,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

// const ClientModel = moon.model("client", schemez);

module.exports = mongoose.model("clients", schemez);

//MongoDB Connection URI
// const uri = "mongodb://localhost:27017/dogged";

// const client = new MongoClient(uri);

// connect Mongodb

// const connectModel = async () => {
//   const validationRules = {
//     $jsonSchema: {
//       bsonType: "object",
//       required: ["name", "email"],
//       properties: {
//         name: {
//           bsonType: "string",
//           description: "must be a string and is required",
//         },
//         email: {
//           bsonType: "string",
//           description: "must be a string and is required",
//         },
//         // timestamps: {
//         //   bsonType: "date",
//         //   description: "must be a time stamp",
//         // },
//         // age: {
//         //   bsonType: "int",
//         //   minimum: 18,
//         //   description: "must be an integer equal to or greater than 18",
//         // },
//       },
//     },
//   };
//   try {
//     const db2 = client.db();

//     db2.createCollection("doggedcollection", { validator: validationRules });

//     return db2;
//   } catch (error) {
//     // console.log(error);
//     // console.log("error oo");
//     throw new Error(error);
//   }
// };

// module.exports = {
//   connectModel,
// };
