const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'airbnb',
});

connection.connect();

const insertIntoDB = (id, likes, username, link, tag) => {
  const sql = `INSERT INTO photos (id, likes, username, link, tag)
               VALUES ('${id}', '${likes}', '${username}', '${link}', '${tag}')`;

  connection.query(sql, (err, row) => {
    if (err) {
      console.log(err);
    } else {
      console.log('record inserted successefully!');
    }
  })
}

// insertIntoDB('hello', 64, 'allz', 'www.hello.com');

// connection.end();

module.exports = {
  insertIntoDB,
};