data = [
  {
    name: "joe random",
    studentid: 1,
    grades: [5.4],
  },
  {
    name: "other guy",
    studentid: 2,
    grades: [7.8, 2.1, 3, 4],
  },
  {
    name: "something",
    studentid: 3,
    grades: [2.3, 4.5, 2.1],
  },
  {
    name: "someone",
    studentid: 4,
    grades: [5.4, 2.1, 8.9],
  },
];

const express = require("express");
const app = express();

const PORT = 8080;

app.use(express.json()); //Used to parse JSON bodies
//app.use(express.urlencoded()); //Parse URL-encoded bodies

//var stuff = data.name === 'something';
//res.send(data.find(({ name }) => name === "other guy").grades);

app.get("/students", (req, res) => {
  let student = req.query.search;
  let result = data.find(({ name }) => name == student);
  res.send(result);
});

app.get("/students/:studentId", (req, res) => {
  const studentId = req.params.studentId;
  const result = data.find(({ studentid }) => studentid == studentId);
  res.send(result);
});

app.get("/grades/:studentId", (req, res) => {
  const studentId = req.params.studentId;
  const result = data.find(({ studentid }) => studentid == studentId);
  res.send(result.grades);
});

app.post("/grades", (req, res) => {
  let grades = req.body;
  let info = [];
  for (var temp in grades) {
    info.push(temp);
  }
  //console.log(grades[info[0]]);
  if (grades[info[0]] > 0 && grades[info[1]] > 0) {
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

app.post("/register", (req, res) => {
  let user = req.body;
  let info = [];
  for (var temp in user) {
    info.push(temp);
  }
  //console.log(grades[info[0]]);
  if (user[info[0]] !== null && user[info[1]] !== null) {
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

app.listen(PORT);
