const express = require('express');
const router = express();


router.get('/',(req,res)=>{
    res.send('Hello index merger');
})

module.exports = router;