const cred = require("./../src/config/dbcreds.js");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MyNewPass",
  database: "airbnb"
});

connection.connect();

const insertIntoDB = (data, callback) => {
  var {id, likes, user, urls, interior, photoSet} = data;
  //console.log(data);
  const sql = `INSERT INTO photos (id, likes, username, link, tag, photo_set)
               VALUES ('${id}', '${likes}', '${user.username}', '${urls.regular}', '${interior}', '${photoSet}')`;

  connection.query(sql, (err, row) => {
    if (err) {
      console.log(err);
    }
    else {
      callback(err,'success')
    }
  });
};

const retrieve = callback => {
  const sql = `SELECT *
               FROM photos`;

  connection.query(sql, (err, row) => {
    if (err) {
      console.log(err);
    } else {
      callback(row);
    }
  });
};

const dbend = () => {
  connection.end();
}

module.exports = {
  insertIntoDB,
  retrieve,
  dbend
};
