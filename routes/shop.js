const express = require('express');
const router = express.Router();
var fun = require('../functions')
var db = require('../connection')


router.post('/signup', (req, res) => {
    console.log('halo');
      res.status(200).json('signup')
  })


module.exports = router;