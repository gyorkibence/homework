const db = require('../database/database');
const query = require('../database/queries');

module.exports = {
  find: () => new Promise((resolve, reject) => db.all(query.getBusinessForm, [], (err, data) => {
    if (err) {
      reject({ error: 'Internal server error' });
    }
    resolve(data);
  })),
  save: (data) => new Promise((resolve, reject) => {
    const { business_form } = data;
    if (!business_form || business_form === '') {
      reject({
        message: 'Business form is required',
      });
    }
    db.run(query.addBusinessForm, [business_form], (err) => {
      if (err) {
        reject({ error: 'Internal server error' });
      }
      resolve({
        message: 'Business form successfully added',
      });
    });
  }),
};
