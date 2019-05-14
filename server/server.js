const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 3000;
// const dbConnection = require('./../db/db.js');
// const fetch = require('node-fetch');
// const key = require('./../src/config/unsplash.js');

app.use(express.static(__dirname + './../dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get('/data', (req, res) => {

//   const search = 'bed';

//   fetch(
//     `https://api.unsplash.com/search/photos/?query=${search}&client_id=${key.UNSPLASH_API_KEY}`,
//     {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     },
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       for (let i = 0; i < data.results.length; i++) {
//         dbConnection.insertIntoDB(
//           data.results[i].id,
//           data.results[i].likes,
//           data.results[i].user.username,
//           data.results[i].urls.regular,
//           search,
//         );
//       }
//       res.send(data.results);
//     });
// });

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
