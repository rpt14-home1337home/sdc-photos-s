const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const csvWriter = createCsvWriter({
    path: `${__dirname}/testfile.csv`
});
 
const records = [
    ['Bob',  'French, English'],
    ['Mary', 'English']
];
 
csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...Done');
    });
 
