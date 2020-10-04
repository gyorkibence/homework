const initialState = {
  language: 'en',
  partners: [],
  cities: [],
  businessForms: [],
  searchValues: {
    name: null,
    city: null,
    businessForm: null,
  },
  modals: {
    partner: false,
    confirm: false,
  },
  input: {
    name: null,
    business_form_id: null,
    tax_number: null,
    company_registration_number: null,
    city_id: null,
    address: null,
    phone: null,
    bank_account_number: null,
    message: null,
  },
};

export default initialState;
