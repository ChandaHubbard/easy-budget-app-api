require("dotenv").config();
const knex = require("knex");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { NODE_ENV, PORT, DB_URL } = require("./config");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const app = express();

const db = knex({
  client: "pg",
  connection: DB_URL,
});

app.set("db", db);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
const morganOption = NODE_ENV === "production" ? "tiny" : "common";

//middleware
app.use(cors());
app.use(morgan(morganOption));
app.use(helmet());

//error handler middleware, move to middleware folder later
app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === "production") {
    response = { error: { message: "server error" } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

//import routers, must be above app.use(expenseRouter), but below middleware
const expenseRouter = require("./routes/expense-router");

//import services
const expenseService = require("./services/expense-service");

app.use(expenseRouter);

const knexTest = db.select().table("expense_type");

console.log(PORT, DB_URL);


app.get('/', (req, res) => {
  res.send('Hello from app.js')
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

module.exports = app;
