const { v4: uuidv4 } = require("uuid");
const Client = require("../model/Client");
const Ppe = require("../model/Ppe");
const Safety = require("../model/Safety");

// general message

const generalMessage = (message, error) => {
  return { message, error };
};

// insertClient
const insertClient = async (req, res) => {
  const { id, email, phone, location, tell } = req.body;

  const idz = `${id}_${uuidv4().substring(0, 5)}`;

  try {
    await Client.create({
      id: idz,
      email,
      phone,
      location,
      tell,
    });

    res.status(200).json(generalMessage("client inserted successfully", false));
  } catch (error) {
    res
      .status(500)
      .json(generalMessage("something went wrong please try again", true));
  }
};

// insert ppe
const insertPpe = async (req, res) => {
  const { item, qunt, type } = req.body;
  try {
    const result = await Client.find().sort({ time: -1 }).limit(1);

    const result2 = await Ppe.create({
      id_ppe: result[0].id,
      item,
      qunt,
      type,
    });

    res.status(200).json(generalMessage("ppe inserted successfuly", false));
  } catch (error) {
    res
      .status(500)
      .json(
        generalMessage("something went wrong when trying to insert ppe", true)
      );
  }
};

// insertSafety
const insertSafety = async (req, res) => {
  const { item, qunt, type, install } = req.body;
  try {
    const result = await Client.find().sort({ time: -1 }).limit(1);

    const result2 = await Safety.create({
      id_safety: result[0].id,
      item,
      qunt,
      type,
      install,
    });

    res.status(200).json(generalMessage("safety inserted successfuly", false));
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(
        generalMessage(
          "something went wrong when trying to insert safety",
          true
        )
      );
  }
};

// getrelatedppe
const getRelatedppe = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await Ppe.find({ id_ppe: id });

    res.status(200).json(generalMessage(result, false));
  } catch (error) {
    res.status(500).json(generalMessage("something went wrong", true));
  }
};

// getrelatedsafety
const getRelatedSafety = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await Safety.find({ id_safety: id });

    res.status(200).json(generalMessage(result, false));
  } catch (error) {
    res.status(500).json(generalMessage("something went wrong", true));
  }
};

const deleteClient = async (req, res) => {
  const id = req.params.id;
  try {
    await Client.deleteMany({ id: id });
    await Ppe.deleteMany({ id_ppe: id });
    await Safety.deleteMany({ id_safety: id });

    res.status(200).json(generalMessage("data deleted successfully", false));
  } catch (error) {
    res.status(500).json(generalMessage("something went wrong", false));
  }
};

const getClient = async (req, res) => {
  try {
    const result = await Client.find();

    res.status(200).json(generalMessage(result, false));
  } catch (error) {
    res.status(500).json(generalMessage("something went wrong", true));
  }
};

module.exports = {
  insertSafety,
  insertClient,
  insertPpe,
  getRelatedppe,
  getRelatedSafety,
  deleteClient,
  getClient,
};

// Router.post("/insertppe", insertPPe);
// Router.post("/insertsafety", insertSafety);
// Router.post("/insertclient", insertClient);
// // DELETE CLIENT
// Router.delete("/deleteclient/:id", deleteClient);

// // get the whole client
// Router.get("/getwholeclient/", getWholeclient);

// // get individual ppe
// Router.get("/getrelatedppe/:id", getRelatedppe);

// Router.get("/gethits", getHits);

// // get individual safety

// Router.get("/getrelatedsafety/:id", getRelatedsafety);
