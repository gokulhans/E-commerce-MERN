const express = require('express');
const session = require('express-session');
const router = express.Router();
var fun = require('../functions')



router.get('/',(req,res)=>{
  var response = {}
  if (req.session.loggedIN) {
    response.login = true
    response.user = req.session.user
    console.log(response);
    res.json(response);
  }
  else {
    response.role = false
    response.login = false
    res.json(response);
  }
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
        req.session.type = response.type
        req.session.loggedfalse = false
        req.session.loggedIN = true
        req.session.user = response.session
        res.status(200).json({signin:true,user:response.session})
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
        req.session.user = response.user
        req.session.loggedfalse = false
        req.session.loggedIN = true
        req.session.type = response.type
        req.session.user = response.session
        res.status(200).json(response)
      } else {
        req.session.loggedfalse = true
  
        res.status(200).json(response);
      }
    })
  })
  
  router.get('/logout', function (req, res) {
    req.session.destroy()
    let login = false
    res.status(200).json(login);
  });

  router.delete('/:id', function (req, res) {
    fun.deleteAccount(req.params)
    res.status(200).json('deleted redirect');
  });
  
  

module.exports = router;