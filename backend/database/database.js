const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('../test.sqlite3', sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE, (err) => {
  if (err) {
    console.log(err.message);
  }
  console.log('Connected to the database.');
});

module.exports = db;
