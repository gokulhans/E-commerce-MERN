const express = require('express');
const router = express.Router();
var fun = require('../functions')



router.get('/',(req,res)=>{
    res.status(200).json('Hello index');
})



router.get('/signup', (req, res) => {
    if (req.session) {
        if (req.session.signupstatusfalse) {
            res.status(200).json('signup', { err: true })
          } 
    }
    else
      res.status(200).json('signup')
  })
  
  router.post('/signup', (req, res) => {
    const {name,email,pswd} = req.body;

    fun.doSignup(req.body).then((response) => {
      res.status(200).json('signup')
      // if (response.signupstatus) {
      //   session = req.session;
      //   session.user = response.insertedId
      //   session.loggedfalse = false
      //   session.loggedIN = true
      //   res.redirect('/')
      // } else {
      //   req.session.signupstatusfalse = true
      //   res.redirect('/signup/')
      // }
    })
  })
  
  router.get('/login', function (req, res) {
    console.log(req.session);
    if (req.session.loggedIN) {
      res.redirect('/')
    }
    if (req.session.loggedfalse) {
      res.status(200).json('login', { err: true });
    } else {
      res.status(200).json('login');
    }
  });
  
  router.post('/login', (req, res) => {
    fun.doLogin(req.body).then((response) => {
      if (response.status) {
        req.session.user = String(response.user._id)
        req.session.loggedfalse = false
        req.session.loggedIN = true
        res.redirect('/users/')
      } else {
        req.session.loggedfalse = true
  
        res.redirect('/login');
      }
    })
  })
  
  router.get('/logout', function (req, res) {
    req.session.destroy()
    res.redirect('/');
  });
  
  


module.exports = router;