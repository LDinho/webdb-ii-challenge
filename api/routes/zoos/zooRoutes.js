const express = require('express');

const router = express.Router();

const db = require('../../../data/dbConfig');

// GET
router.get('/', async (req, res) => {
  try {
    const zoos = await db('zoos');

    if (zoos.length) {
      res.status(200).json(zoos)

    } else {
      res.status(400).json({message: `No zoos found`})

    }
  }
  catch (err) {
    res.status(500).json({error: `Unable to retrieve zoos`})
  }

});

module.exports = router;
