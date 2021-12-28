const PORT = 8000;
const express = require('express');
const app = express();
const cors = require('cors');
var db = require('./connection');

// git controller and tester....
/*
merging by kannappan
*/
// ends 
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Welcome to Backend! Bitch ')
})

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

var indexRouter = require('./routes/index');
app.use('/index',indexRouter);

db.connect((err)=>{
  if(err) console.log("Connection Error"+err);
  else console.log("Database connected to port")
})

app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`);
})