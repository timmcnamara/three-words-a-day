const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const axios = require("axios");
const dotenv = require("dotenv").config();

const app = express();
const { OXFORD_API_USER, OXFORD_API_KEY } = dotenv.parsed;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/words", (req, res, next) => {
  const { word } = req.query;

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
      res
        .status(200)
        .json(response.data.results[0].lexicalEntries[0].sentences[0].text);
    })
    .catch(err => next(err));
});

// Error Handling
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  res.status(500);
  res.json({
    error: err,
    message: "Internal Server Error"
  });
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
