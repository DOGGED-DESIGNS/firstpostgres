const { Client } = require("pg");

const clients = new Client({
  host: "localhost",
  user: "postgres",
  password: "dogged8000",
  database: "testdata",
});

const db = clients.connect();

// clients.query('select * from how',(err, res)=>{
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log(res.rows);
//     }
// })

module.exports = {
  clients,
};
