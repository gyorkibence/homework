module.exports = {
  getPartners: 'SELECT * FROM partner;',
  deletePartner: (id) => `DELETE FROM partner WHERE id = '${id}';`,
  addPartner: 'INSERT INTO partner (name, business_form_id, tax_number, company_registration_number, city_id, address, phone, bank_account_number, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);',
  updatePartner: (id) => `UPDATE partner
    SET name = ?,
    business_form_id = ?,
    tax_number = ?,
    company_registration_number = ?,
    city_id = ?,
    address = ?,
    phone = ?,
    bank_account_number = ?,
    message = ?
    WHERE id = ${+id};`,
  getCities: 'SELECT * FROM city;',
  addCity: 'INSERT INTO city (name) VALUES (?);',
  getBusinessForm: 'SELECT * FROM business_form;',
  addBusinessForm: 'INSERT INTO business_form (business_form) VALUES (?);',
};
