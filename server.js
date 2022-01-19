if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const PORT = process.env.PORT || 8000;

const express = require('express');
const app = express();
// const path = require('path');

const cors = require('cors');
const sessions = require('cookie-session');
var db = require('./connection');


// middlewares
app.use(express.json())
app.use(cors());

// app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

// getting and posting methods

app.get('/', (req, res) => {
  res.send('Welcome to Backend! working')
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
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: false
}));

// router setting

var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var cartRouter = require('./routes/cart');
var shopRouter = require('./routes/shop');

app.use('/users', usersRouter);
app.use('/products', productsRouter)
app.use('/cart', cartRouter)
app.use('/shop', shopRouter)

// db connection
db.connect((err) => {
  if (err) console.log("Connection Error" + err);
  else console.log("Database connected to port")
})


if (process.env.NODE_ENV == "production") {
  app.use(express.static('client/build'))
  const path = require('path')
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// server listening
app.listen(process.env.PORT || PORT, () => {
  console.log(`server is listening on ${PORT}`);
})
