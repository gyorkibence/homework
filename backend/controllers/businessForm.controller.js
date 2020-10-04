const businessForm = require('../services/businessForm.service');

module.exports = {
  find: async (req, res) => {
    try {
      const data = await businessForm.find();
      res.json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  save: async (req, res) => {
    try {
      const data = await businessForm.save(req.body);
      res.json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
