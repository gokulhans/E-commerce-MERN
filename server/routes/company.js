const express = require('express');
const router = express.Router();
var fun = require('../functions')
var db = require('../connection')


router.get('/',async (req,res)=>{
    console.log('company');
    res.status(200).json('company');
})


module.exports = router;