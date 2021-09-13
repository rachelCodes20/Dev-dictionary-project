const {termName, termDefinition} = require('./term-model')
const express = require('express');

const termController = require('./termController');

const router = express.Router();
//add create
//add delte
router.get('/', termController.getTerm, (req, res) => {

    return res.status(200).json({termName: termName, termDefinition: termDefinition});
  });

  

module.exports = router;