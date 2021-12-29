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

    fun.doSignup(req.body).then((response) => {
      if (response.signupstatus) {
        session = req.session;
        session.loggedfalse = false
        session.loggedIN = true
        session.user = response.insertedId
        res.status(200).json({signin:true})
      } else {
        req.session.signupstatusfalse = true
        res.status(200).json('redirect to /signup/ ')
      }
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
        res.status(200).json(response)
      } else {
        req.session.loggedfalse = true
  
        res.status(200).json(response);
      }
    })
  })
  
  router.get('/logout', function (req, res) {
    req.session.destroy()
    res.redirect('/');
  });
  
  


module.exports = router;