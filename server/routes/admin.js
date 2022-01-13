const express = require('express');
const router = express.Router();
var fun = require('../functions')
var db = require('../connection')


router.get('/',async (req,res)=>{
    console.log('admin');
    res.status(200).json('admin');
})


module.exports = router;