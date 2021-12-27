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


// router setting
var usersRouter = require('./routes/users');
app.use('/users',usersRouter);

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


// db connection
db.connect((err)=>{
  if(err) console.log("Connection Error"+err);
  else console.log("Database connected to port")
})

// server listening
app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`);
})