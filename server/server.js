const PORT = 8000;
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Welcome to Backend! Bitch')
})

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

var indexRouter = require('./routes/index');

app.use('/index',indexRouter);


app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`);
})