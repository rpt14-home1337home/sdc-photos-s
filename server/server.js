const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 3000;

app.use(express.static(__dirname + './../dist'));
app.use(bodyParser.urlencoded( { extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})