const express = require('express');
const router = express.Router();
var fun = require('../functions')
var db = require('../connection')


router.get('/',async (req,res)=>{
    let cart = await db.get().collection('carts').find({"id":req.session.user}).toArray()
    console.log(cart);
    res.status(200).json(cart);
})

router.post('/add-to-cart',(req,res)=>{
    let cart = req.body
    cart.id = req.session.user
    console.log(cart);
    db.get().collection('carts').insertOne(cart)
    res.status(200).json(cart);
})

router.delete('/:id',async (req,res)=>{
    db.get().collection('carts').removeOne({_id:req.params.id}).then((response)=>{
        res.status(200).json(response);
    })
})


module.exports = router;