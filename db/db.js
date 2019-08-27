const cred = require("./../src/config/dbcreds.js");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: cred.pwd,
  database: "airbnb"
});

connection.connect();

const insertIntoDB = (id, likes, username, link, tag, photoSet) => {
  const sql = `INSERT INTO photos (id, likes, username, link, tag, photo_set)
               VALUES ('${id}', '${likes}', '${username}', '${link}', '${tag}', '${photoSet}')`;

  connection.query(sql, (err, row) => {
    if (err) {
      console.log(err);
    }
  });
};


const insertBulkIntoDB = (data, callback) => {
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

const retrievePhotoSet = ((photoset, callback) => {
  const sql = `SELECT *
               FROM photos where photo_set = ${photoset}`;

  connection.query(sql, (err, row) => {
    if (err) {
      console.log(err);
    } else {
      callback(row);
    }
  });
});



const dbend = () => {
  connection.end();
}

module.exports = {
  insertIntoDB,
  insertBulkIntoDB,
  retrieve,
  dbend
};
