const city = require('../services/city.service');

module.exports = {
  find: async (req, res) => {
    try {
      const data = await city.find();
      res.json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  save: async (req, res) => {
    try {
      const data = await city.save(req.body);
      res.json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
