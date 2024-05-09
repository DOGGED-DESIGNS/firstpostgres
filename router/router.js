const Express = require("express");
const {
  insertClient,
  insertPpe,
  insertSafety,
  getRelatedppe,
  getRelatedSafety,
  deleteClient,
  getClient,
} = require("../controller/controller");

const route = Express.Router();

// this are all the get request

route.post("/insertclient", insertClient);
route.post("/insertppe", insertPpe);
route.post("/insertsafety", insertSafety);
route.get("/getrelatedppe/:id", getRelatedppe);
route.get("/getrelatedsafety/:id", getRelatedSafety);
route.get("/deleteclient/:id", deleteClient);
route.get("/getwholeclient", getClient);

module.exports = {
  route,
};
