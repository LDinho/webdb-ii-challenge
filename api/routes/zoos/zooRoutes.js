const express = require('express');

const router = express.Router();

const db = require('../../../data/dbConfig');

// GET

router.get('/', async (req, res) => {
  try {
    const zoos = await db('zoos'); // SQL - select * from zoos

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

// GET by id

router.get('/:id', async (req, res) => {


});

//POST

router.post('/', async (req, res) => {
  const newZoo = req.body;

  try {
    const { name } = newZoo;

    if (!name) {
      return res.status(400).json({error: 'name missing'});
    } else {

      const zoo = await db('zoos')
        .insert(newZoo, 'id');

      res.status(201).json(zoo);
    }

  }
  catch (err) {
    return res.status(500)
      .json({
        err,
        message: 'Unable to process request'

      })
  }
})

// UPDATE

router.put('/:id', async (req, res) => {


})

// DELETE

router.delete('/:id', async (req, res) => {


})

module.exports = router;
