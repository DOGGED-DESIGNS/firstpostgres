const { clients } = require("../model/model");
const { v4: uuidv4 } = require("uuid");
const Message = require("../controller/functions/message");

const insertPPe = (req, res) => {
  const { item, qunt, type } = req.body;
  // insert into ppe (id_ppe,item,qunt,time)
  // values(1,'reflective',2,now());

  const queryget = `select * from client order by time desc  limit 1;`;
  clients.query(queryget, (err, data) => {
    if (err) {
      res.json(Message(err, true, "danger"));
    }
    if (data) {
      // res.json(Message(", false, "success"));
      const id_ppe = data.rows[0].id;
      // console.log(id_ppe);
      console.log(data.rows);
      query = `insert into ppe (id_ppe,item,qunt,time,type) values( '${id_ppe}','${item}',${qunt}, now(),'${type}' )`;

      clients.query(query, (err, data) => {
        if (err) {
          res.json(Message(err, true, "danger"));
        }
        if (data) {
          res.json(Message("data inserted successfully", false, "success"));
        }
      });
    }
  });
};

const insertSafety = (req, res) => {
  const { item, qunt, type, install } = req.body;
  // insert into ppe (id_ppe,item,qunt,time)
  // values(1,'reflective',2,now());

  const queryget = `select * from client order by time desc  limit 1;`;
  clients.query(queryget, (err, data) => {
    if (err) {
      res.json(Message(err, true, "danger"));
    }
    if (data) {
      // res.json(Message(", false, "success"));
      const id_safety = data.rows[0].id;
      // console.log(id_ppe);
      console.log(data.rows);
      query = `insert into safety (id_safety,item,qunt,install,time,type) values('${id_safety}','${item}','${qunt}','${install}', now(),'${type}' )`;

      clients.query(query, (err, data) => {
        if (err) {
          res.json(Message(err, true, "danger"));
        }
        if (data) {
          res.json(Message("data inserted successfully", false, "success"));
        }
      });
    }
  });
};

const insertClient = (req, res) => {
  const { id, email, phone, location, tell } = req.body;

  const id2 = `${id}_${uuidv4().substring(0, 5)}`;

  console.log(id2);

  // console.log(testuuid);

  // prepare the query

  const query = `insert into client (id,email,phone,location,tell,time)
      values('${id2}',' ${email} ', '${phone}', '${location}', '${tell}',now() )

        `;

  // insert into the database

  clients.query(query, (err, data) => {
    if (err) {
      res.json(Message(err, true, "danger"));
    }
    if (data) {
      res.json(Message("data inserted successfully", false, "success"));
    }
  });

  //    const query  = insert into client (id,email,phone,location,tell,time)
  //    values('jerry','uzoechijerry@gmail.com','090','fabukade',
  //         'tell',now())
};

// delete client

const deleteClient = (req, res) => {
  const id = req.params.id;

  const query = `delete from client where id = '${id}'`;

  clients.query(query, (err, data) => {
    if (err) {
      res.json(Message(err, true, "danger"));
    }
    if (data) {
      res.json(Message("data deleted successfully", false, "success"));
    }
  });
};

// get whole client

const getWholeclient = (req, res) => {
  const query = `select * from client order by time desc limit 8`;
  clients.query(query, (err, data) => {
    if (err) {
      res.json(Message(err, true, "danger"));
    }
    if (data) {
      res.json(Message(data.rows, false, "success"));
    }
  });
};
// get related ppe

const getRelatedppe = (req, res) => {
  const id = req.params.id;

  console.log(id);

  const query = `select * from ppe where id_ppe = '${id}'`;
  clients.query(query, (err, data) => {
    if (err) {
      res.json(Message(err, true, "danger"));
    }
    if (data) {
      res.json(Message(data.rows, false, "success"));
    }
  });
};

// get related safety

const getRelatedsafety = (req, res) => {
  const id = req.params.id;

  console.log(id);

  const query = `select * from safety where id_safety = '${id}'`;
  clients.query(query, (err, data) => {
    if (err) {
      res.json(Message(err, true, "danger"));
    }
    if (data) {
      res.json(Message(data.rows, false, "success"));
    }
  });
};

// updating hits

const updateHits = (req, res) => {
  const query = "update  hits set hits = hits + 1";

  clients.query(query, (err, data) => {
    if (err) {
      res.json(Message(err, true, "danger"));
    }
    if (data) {
      res.json(Message("hits was updated successfully", false, "success"));
    }
  });
};

// get all the hits

const getHits = (req, res) => {
  const query = "select * from hits";

  clients.query(query, (err, data) => {
    if (err) {
      res.json(Message(err, true, "danger"));
    }
    if (data) {
      res.json(Message(data.rows[0].hits, false, "success"));
    }
  });
};

module.exports = {
  insertPPe,
  insertClient,
  getHits,
  updateHits,
  insertSafety,
  deleteClient,
  getRelatedppe,
  getRelatedsafety,
  getWholeclient,
};

// clients.query( `insert into how (id, email) values(1,'${values}')`, (err, res) => {
//   if (!err) {
//     console.log(res.rows);
//   } else {
//     console.log(err);
//   }
// });
