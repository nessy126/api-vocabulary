const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

const wordsRouter = require("./routes/api/words");

app.use(cors());
app.use(express.json());

app.use('/api/words', wordsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const {status = 500, message = 'Server error' } = err;
  res.status(status).json({ message: err.message })
})

module.exports = app;
