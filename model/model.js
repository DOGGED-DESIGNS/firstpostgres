const { Client } = require("pg");
const Env = require("dotenv");

Env.config({ path: `${__dirname}/../config.env` });

const clients = new Client({
  host: "localhost",
  port: process.env.PORT2,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
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

// PGPASSWORD=s4TJdS0QkHgpvQVEDVcyL6S3ei7VPyBR psql -h dpg-cn14856n7f5s73fdi3ag-a.oregon-postgres.render.com -U sandatabase_user sandatabase
