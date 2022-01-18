const express = require('express');
const router = express.Router();
var fun = require('../functions')


router.post('/signup', (req, res) => {

  fun.ShopSignup(req.body).then((response) => {
    if (response.signupstatus) {
      var session = req.session;
      session.type = response.type
      session.loggedfalse = false
      session.loggedIN = true
      session.user = response.insertedId
      res.status(200).json({ signin: true })
    } else {
      req.session.signupstatusfalse = true
      res.status(200).json('redirect to /signup/ ')
    }
  })
})

router.post('/login', (req, res) => {
  fun.ShopLogin(req.body).then((response) => {
    if (response.status) {
      req.session.user = String(response.user._id)
      req.session.loggedfalse = false
      req.session.loggedIN = true
      req.session.type = response.type
      res.status(200).json(response)
    } else {
      req.session.loggedfalse = true

      res.status(200).json(response);
    }
  })
})


module.exports = router;