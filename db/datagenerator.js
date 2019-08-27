/*
1. Take existing photos from the database and perform heap permutation
2. Throlle csv file creation of the 80 to 83 photos found in the database
*/
const permutations = require("./heapperm.js");
const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const csvWriter = createCsvWriter({
    path: `${__dirname}/inputfile.csv`,
    append: true
});
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MyNewPass",
  database: "airbnb"
});
var dataset = [], writeMode = true; // writeMode true means Write New, false means Append
var sequence = permutations.rs;
//console.log(sequence);
connection.connect();

const retrieve = callback => {
  const sql = `select 
                case
                  when ph.photo_set = 'one' then 1 
                  when ph.photo_set = 'two' then 2
                  when ph.photo_set = 'three' then 3
                  when ph.photo_set = 'four' then 4
                  when ph.photo_set = 'five' then 5
                  when ph.photo_set = 'six' then 6
                  when ph.photo_set = 'seven' then 7
                  when ph.photo_set = 'eight' then 8
                  when ph.photo_set = 'nine' then 9
                  else 0
                end setno,ph.*
                from photos ph
                order by 
                  case
                    when ph.photo_set = 'one' then 1 
                    when ph.photo_set = 'two' then 2
                    when ph.photo_set = 'three' then 3
                    when ph.photo_set = 'four' then 4
                    when ph.photo_set = 'five' then 5
                    when ph.photo_set = 'six' then 6
                    when ph.photo_set = 'seven' then 7
                    when ph.photo_set = 'eight' then 8
                    when ph.photo_set = 'nine' then 9
                    else 0
                  end
                `;
  
  connection.query(sql, (err, row) => {
    if (err) {
      console.log(err);
    } else {
      //console.log("ROW ==> ", row)
      callback(row);
      connection.end();
    }
  });
};

const createBigData = () => {
  var index = 0, seqLength = sequence.length;
  retrieve(data => {
    //Data contains array of photsets
    //Generate heapPermutations of photosets
    //console.log("TEST ==> ",data.length);
    
    
    //data.forEach((el,idx) => dataset.push([el.id,el.likes,el.username,el.link,el.tag,el.photo_set]))
    
    while (seqLength > 0) {
      //Take first sequence and write this as set 0
      sequence[index].forEach(el => {
        if (dataset.length % 10000 === 0) {
          csvWriter.writeRecords(dataset);       // returns a promise
          dataset = [].slice();
        }
        dataset.push([++index, data[el].likes, data[el].username, data[el].link, data[el].tag, data[el].photo_set].slice());
        seqLength--;
      });
    }
    if (dataset.length > 0) {
      csvWriter.writeRecords(dataset);
    }
    
    // sequence.forEach((sq,idx) => {
    //   sq.forEach((el, idy) => {
    //     //console.log("DATA ==> ",data[el].id);
    //     dataset.push([++index, data[el].likes, data[el].username, data[el].link, data[el].tag, data[el].photo_set].slice());
    //     // csvWriter.writeRecords(dataset)       // returns a promise
    //     if (dataset.length % 10000 === 0 ) {
    //       dataset = [].slice();
    //     }
    //   });
    //   csvWriter.writeRecords(dataset);       // returns a promise

    // });
  });
  
};

createBigData();
    