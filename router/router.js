const Express = require("express");
const {
  insertClient,
  insertPPe,
  updateHits,
  insertSafety,
  getHits,
  deleteClient,
  getWholeclient,
  getRelatedppe,
  getRelatedsafety,
} = require("../controller/controller");

const Router = Express.Router();

// Router.get("/add", (req, res) => {
//   res.send("this is what i have been waiting for");
// });

Router.post("/insertppe", insertPPe);
Router.post("/insertsafety", insertSafety);
Router.post("/insertclient", insertClient);
// DELETE CLIENT
Router.delete("/deleteclient/:id", deleteClient);

// get the whole client
Router.get("/getwholeclient/", getWholeclient);

// get individual ppe
Router.get("/getrelatedppe/:id", getRelatedppe);

// updating hits

Router.get("/updatehits", updateHits);

// get hits

Router.get("/gethits", getHits);

// get individual safety

Router.get("/getrelatedsafety/:id", getRelatedsafety);

module.exports = Router;
