const partner = require('../services/partner.service');

module.exports = {
  find: async (req, res) => {
    try {
      const data = await partner.find();
      res.json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const data = await partner.delete(id);
      res.json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  save: async (req, res) => {
    try {
      const data = await partner.save(req.body);
      res.json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    try {
      const data = await partner.update(req.body, id);
      res.json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
