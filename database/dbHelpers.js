const db = require('./index.js');

const dbHelpers = {
  get: (callback) => {
    db.query('SELECT * FROM Games', (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  post: (req, callback) => {
    let { name, rating, description } = req.body;
    let queryString = `INSERT INTO Games (name, rating, description) VALUES ("${name}", ${rating}, "${description}")`;
    db.query(queryString, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  delete: (req, callback) => {
    let id = req.params.id;
    let queryString = `DELETE FROM Games WHERE id=${id}`;
    db.query(queryString, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      };
    });
  }
};

module.exports = dbHelpers;