const { json } = require("body-parser");
const express = require("express");
// const bodyParser = require("body-parser");
// const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 3000;

// app.use(bodyParser());
app.use(json());
// let notes = [];

app.get("/", (req, res) => {
  res.send({ message: "Hello from Express js App" });
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
