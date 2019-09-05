const express = require("express");
const bodyParser = require("body-parser");
const dbConnection = require("./../db/db.js");
const app = express();
const port = process.env.port || 3000;

app.use(express.static(__dirname + "./../dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/retrieve", (req, res) => {
  dbConnection.retrieve(data => {
    res.send(data);
  });
});

//CRUD Operations -> CREATE
app.post("/addphotoset", (req, res) => {
  var reqBody = {
    id: req.body.id,
    likes: req.body.likes,
    username: req.body.username,
    link: req.body.link,
    tag: req.body.tag,
    photoSet: req.body.photoSet
  };

  dbConnection.insertIntoDB(reqBody, (err, results) => {
    err ? res.status(500).send(err) : res.status(200).send(results);
  });
});

//CRUD Operations -> READ

//CRUD Operations -> UPDATE

//CRUD Operations -> DELETE

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
