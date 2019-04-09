const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const axios = require("axios");
const dotenv = require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/words", (req, res) => {
  const { word } = req.query;
  const { OXFORD_API_USER, OXFORD_API_KEY } = dotenv.parsed;

  axios
    .get(
      `https://od-api.oxforddictionaries.com/api/v1/entries/en/${word}/sentences`,
      {
        headers: {
          app_id: `${OXFORD_API_USER}`,
          app_key: `${OXFORD_API_KEY}`
        }
      }
    )
    .then(response => {
      res.setHeader("Content-Type", "application/json");
      res.json(response.data);
    })
    .catch(err => console.log("**", err));
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
