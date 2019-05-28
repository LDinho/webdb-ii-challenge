const express = require('express');

const router = express.Router();

const db = require('../../../data/dbConfig');

// GET

router.get('/', async (req, res) => {
  try {
    const bears = await db('bears'); // SQL - select * from bears

    if (bears.length) {
      res.status(200).json(bears)

    } else {
      res.status(404)
         .json({
           message: `No bears found`
         })
    }
  }
  catch (err) {
    res.status(500)
       .json({
         error: `Unable to retrieve bears`
       })
  }
});

// GET by id

router.get('/:id', async (req, res) => {

});

//POST

router.post('/', async (req, res) => {

})

// UPDATE

router.put('/:id', async (req, res) => {

})

// DELETE

router.delete('/:id', async (req, res) => {

})

module.exports = router;
