const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const colors = require('colors')
const chalk = require("chalk")
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config()

// app
const app = express()

// db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB CONNECTED on PORT ${port}`.rainbow.underline.bold))
  .catch((err) => console.log("DB CONNECTION ERR", err));

// middlewares
// app.use(morgan("dev"));

const morganMiddleware = morgan(function (tokens, req, res) {
  return [
      '\n\n\n',
      chalk.hex('#ff4757').bold('🍄  Morgan --> '),
      chalk.hex('#34ace0').bold(tokens.method(req, res)),
      chalk.hex('#ffb142').bold(tokens.status(req, res)),
      chalk.hex('#ff5252').bold(tokens.url(req, res)),
      chalk.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
      chalk.hex('#f78fb3').bold('@ ' + tokens.date(req, res)),
      chalk.yellow(tokens['remote-addr'](req, res)),
      chalk.hex('#fffa65').bold('from ' + tokens.referrer(req, res)),
      chalk.hex('#1e90ff')(tokens['user-agent'](req, res)),
      '\n\n\n',
  ].join(' ');
})

app.use(morganMiddleware)



app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// routes middleware
readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)))

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.table(`Server is running on port ${port}`.brightCyan.underline.bold));
