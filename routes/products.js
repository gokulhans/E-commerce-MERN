const express = require('express');
const router = express.Router();
var fun = require('../functions')
var db = require('../connection')


router.get('/',async (req,res)=>{
  console.log('calling....');
    let product = await db.get().collection('products').find({}).toArray()
    console.log(product);
    res.json(product);
})

router.post('/add-product',(req,res)=>{
    let product = req.body
    console.log(product);
    db.get().collection('products').insertOne(product)
    res.status(200).json(product);
})


module.exports = router;