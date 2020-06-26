data = [
  {
    name: "joe random",
    grades: [5.4],
  },
  {
    name: "other guy",
    grades: [7.8, 2.1, 3, 4],
  },
  {
    name: "something",
    grades: [2.3, 4.5, 2.1],
  },
  {
    name: "someone",
    grades: [5.4, 2.1, 8.9],
  },
];

const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  //var stuff = data.name === 'something';
  //res.send(data.find(({ name }) => name === "other guy").grades);
});

app.listen(PORT);
