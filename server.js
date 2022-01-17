if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const PORT = 8000;

const express = require('express');
const app = express();


const cors = require('cors');
const sessions = require('express-session');
var db = require('./connection');

  
// middlewares 
app.use(express.json())
app.use(cors());


// getting and posting methods

app.get('/',(req,res)=>{
    res.send('Welcome to Backend! Bitch ')
})

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});



//  session setup
// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
  secret: "thisismysecertkeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
  }));
  
// router setting

  var usersRouter = require('./routes/users');
  var productsRouter = require('./routes/products');
  var cartRouter = require('./routes/cart');
  var companyRouter = require('./routes/company');

  app.use('/users',usersRouter);
  app.use('/products',productsRouter)  
  app.use('/cart',cartRouter)  
  app.use('/company',companyRouter)  
  
  // db connection
  db.connect((err)=>{
    if(err) console.log("Connection Error"+err);
    else console.log("Database connected to port")
  })
  
// server listening
<<<<<<< HEAD
app.listen(process.env.PORT || 5000,()=>{
=======
app.listen(process.env.PORT || PORT,()=>{
>>>>>>> b913353966b522d5a771d6d009cca13eba5d7541
  console.log(`server is listening on ${PORT}`);
})
