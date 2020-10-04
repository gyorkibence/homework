const data = require('./dummy.json');
const db = require('./database');

module.exports = async () => {
  const init = async () => {
    await db.serialize(async () => {
      db.run('DROP TABLE IF EXISTS city').
      run('DROP TABLE IF EXISTS business_form').
      run('DROP TABLE IF EXISTS partner').
      run(`CREATE TABLE IF NOT EXISTS city (
        city_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT)`).
      run(`CREATE TABLE IF NOT EXISTS business_form (
        business_form_id INTEGER PRIMARY KEY AUTOINCREMENT,
        business_form TEXT)`).
      run(`CREATE TABLE IF NOT EXISTS partner (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        business_form_id INTEGER DEFAULT 1,
        tax_number TEXT,
        company_registration_number TEXT,
        city_id INTEGER,
        address TEXT,
        phone TEXT,
        bank_account_number TEXT,
        message TEXT,
        FOREIGN KEY(city_id) REFERENCES city(city_id),
        FOREIGN KEY(business_form_id) REFERENCES business_form(business_form_id)
        )`);
    });
  };

  const createCities = async () => {
    await Promise.all(data.city.map(async (item) => {
      await db.run('INSERT INTO city (name) VALUES (?)', [item.name]);
    }));
  };
  
  const createBusinessForms = async () => {
    await Promise.all(data.business_form.map(async (item) => {
      await db.run('INSERT INTO business_form (business_form) VALUES (?)', [item.business_form]);
    }));
  };
  
  const createPartners = async () => {
    await Promise.all(data.partner.map(async (item) => {
      const { name, business_form_id, tax_number, company_registration_number, city_id, address, phone, bank_account_number, message } = item;
      await db.run(`INSERT INTO partner (name, business_form_id, tax_number, company_registration_number, city_id, address, phone, bank_account_number, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);'`, [name, business_form_id, tax_number, company_registration_number, city_id, address, phone, bank_account_number, message])
    }));
  };

  await init();
  await createCities();
  await createBusinessForms();
  await createPartners();
};
