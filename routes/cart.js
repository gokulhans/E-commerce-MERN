const express = require('express');
const router = express.Router();
var fun = require('../functions')
var db = require('../connection')

function duplicate(array, product) {
        array.forEach(element => {
            
            if (element.item == product.item) {
                return duplicate = true
            } else {
                add = true
            }
        });
    }
router.get('/',async (req,res)=>{
  
    var cart = await db.get().collection('carts').find({"id":req.session.user._id}).toArray()
    console.log(cart);
    res.status(200).json(cart);
})

router.get('/checkout',async (req,res)=>{
    var cart = await db.get().collection('carts').find({"id":req.session.user._id}).toArray()
    var price = 0;
    cart.forEach(element => {
            console.log(element);
        return price = price + element.price
    });
    console.log(price);
    res.json(price);
})

router.post('/add-to-cart',async(req,res,next)=>{
    var usercart = await db.get().collection('carts').find({"id":req.session.user._id}).toArray()

    let cart = req.body
    cart.id = req.session.user._id
    console.log(cart);
    // duplicate(usercart,cart)
    db.get().collection('carts').insertOne(cart)
    next();
})

router.delete('/:id',async (req,res)=>{
    db.get().collection('carts').removeOne({_id:req.params.id}).then((response)=>{
        res.status(200).json(response);
    })
})


module.exports = router;