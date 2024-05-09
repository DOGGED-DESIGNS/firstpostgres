const Express = require("express");
const { connect } = require("./database/connection");

const { route } = require("./router/router");
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

const start = async () => {
  try {
    await connect();

    App.listen(process.env.PORT, (req, res) => {
      console.log("i am listening ");
    });
    console.log("database connected successfully two times");
  } catch (error) {
    console.log(error.message);
    console.log("data base failed to connect");
  }
};

start();

App.use("/api", route);

App.use((req, res) => {
  res.status(400).json({ error: true, message: "page not found" });
});

// App.use("/api", Route);

// App.use((req, res) => {
//   res.status(500).send("page not found");
// });
