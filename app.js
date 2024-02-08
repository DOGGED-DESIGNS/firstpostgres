const Express = require("express");
// const Route = require("./router/router");
const cors = require("cors");
// const { clients } = require("./model/model");
const bodyparser = require("body-parser");

const App = Express();
const Morgan = require("morgan");

const Env = require("dotenv");
const morgan = require("morgan");

Env.config({ path: `${__dirname}/config.env` });

console.log(process.env.PORT);
console.log(process.env.PASSWORD);

App.use(morgan("dev"));

App.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "UPDATE", "PATCH", "DELETE"],
  })
);

App.use(bodyparser.json());
App.use(bodyparser.urlencoded({ extended: true }));

App.listen(process.env.PORT, (req, res) => {
  console.log("i am listening");
});

// App.use("/api", Route);

App.use((req, res) => {
  res.status(500).send("page not found");
});
// const Express = require("express");
// const path = require("path");
// const multer = require("multer");
// const Router = require("./router/router");
// const env = require("dotenv");
// const cors = require("cors");
// env.config({ path: `${__dirname}/Path/config.env` });

// const bodyparser = require("body-parser");
// const morgan = require("morgan");
// const App = Express();
// App.use(morgan("dev"));
// App.use(bodyparser.json());
// App.use(bodyparser.urlencoded({ extended: true }));
// App.use(Express.static("assets"));
// App.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PATCH", "UPDATE"],
//   })
// );
// App.set("view engine", "ejs");

// App.use("/api", Router);

// App.use((req, res) => {
//   res.send("page not found");
// });

// const PORT = process.env.PORT || 8000;

// App.listen(PORT, (req, res) => {
//   console.log("listening to port" + PORT);
// });

// clients.query( `insert into how (id, email) values(1,'${values}')`, (err, res) => {
//   if (!err) {
//     console.log(res.rows);
//   } else {
//     console.log(err);
//   }
// });
