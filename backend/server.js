const express = require('express');
const CORS = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

const createDatabase = require('./database/createDatabase');

const partner = require('./controllers/partner.controller');
const city = require('./controllers/city.controller');
const businessForm = require('./controllers/businessForm.controller');

app.use(express.json());
app.use(CORS());

// PARTNERS
app.get('/api/partner', partner.find);
app.delete('/api/partner/:id', partner.delete);
app.post('/api/partner', partner.save);
app.patch('/api/partner/:id', partner.update);

// CITIES
app.get('/api/city', city.find);
app.post('/api/city', city.save);

// BUSINESS FORMS
app.get('/api/business-form', businessForm.find);
app.post('/api/business-form', businessForm.save);

app.listen(PORT, async () => {
  await createDatabase();
  console.log(`App is listening on ${PORT}`);
});
