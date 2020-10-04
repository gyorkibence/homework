const db = require('../database/database');
const query = require('../database/queries');

module.exports = {
  find: () => new Promise((resolve, reject) => db.all(query.getCities, [], (err, data) => {
    if (err) {
      reject({ error: 'Internal server error' });
    }
    resolve(data);
  })),
  save: (data) => new Promise((resolve, reject) => {
    const { name } = data;
    if (!name || name === '') {
      reject({
        message: 'Name is required',
      });
    }
    db.run(query.addCity, [name], (err) => {
      if (err) {
        reject({ error: 'Internal server error' });
      }
      resolve({
        message: 'City successfully added',
      });
    });
  }),
};