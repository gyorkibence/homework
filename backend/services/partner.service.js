const db = require('../database/database');
const query = require('../database/queries');

const find = () => new Promise((resolve, reject) => {
  db.all(query.getPartners, [], (err, data) => {
    if (err) {
      reject({ error: 'Internal server error' });
    }
    resolve(data);
  });
});

const deleteFunc = (id) => new Promise((resolve, reject) => {
  find()
    .then((item) => {
      if (item.find((data) => +data.id === +id)) {
        db.run(query.deletePartner(id), (err) => {
          if (err) {
            reject({ error: 'Internal server error' });
          }
          resolve({
            message: 'Partner succesfully deleted',
          });
        })
      } else {
        reject({
          message: `ID doesn't exists.`,
        });
      }
    });
});

const save = (data) => new Promise((resolve, reject) => {
  const { name, business_form_id, tax_number, company_registration_number, city_id, address, phone, bank_account_number, message } = data;
  if (!name || name === '' || !city_id || city_id === '') {
    reject({
      message: 'Name and city are required',
    });
  }
  db.run(query.addPartner,
    [name, business_form_id, tax_number, company_registration_number, city_id, address, phone, bank_account_number, message],
    (err) => {
      if (err) {
        reject({ error: 'Internal server error' });
      }
      resolve({
        message: 'Partner successfully added',
      });
    });
});

const update = (data, id) => new Promise((resolve, reject) => {
  const { name, business_form_id, tax_number, company_registration_number, city_id, address, phone, bank_account_number, message } = data;
  if (!name || name === '' || !city_id || city_id === '') {
    reject({
      message: 'Name and city are required',
    });
  }
  find()
    .then((item) => {
      if (item.find((data) => +data.id === +id)) {
        db.run(query.updatePartner(id),
          [name, business_form_id, tax_number, company_registration_number, city_id, address, phone, bank_account_number, message],
          (err) => {
            if (err) {
              reject({ error: 'Internal server error' });
            }
            resolve({
              message: 'Partner succesfully updated',
            });
          })
      } else {
        reject({
          message: `ID doesn't exists.`,
        });
      }
    })
});

module.exports = {
  find,
  delete: deleteFunc,
  save,
  update,
};
