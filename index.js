const express = require('express')
var product = require('./routes/product')
var user = require('./routes/user')
var cart = require('./routes/cart')
var address = require('./routes/add')
var dotenv = require('dotenv')
let cors = require("cors");



var mangoose = require('mongoose')
const { json } = require('express')
dotenv.config({ path: './.env' });
var key = process.env.URL_Database
mangoose.connect(key, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("MongoDB Connected…")
  })
var app = express()
app.use(json())
app.use(cors());
app.use('/user', user)
app.use('/product', product)
app.use('/cart', cart)
app.use('/address', address)

const PORT = process.env.PORT || 5000;
var sai={
  count:1500
}


app.get('/', (req, res) => {

sai.count+=1


  res.send(` <h1> Developed by S and D Shah</h1> 
<h1>
Today Total Request:${sai.count}
</h1>
  <a href='https://www.linkedin.com/in/naseeb-khan-deenshah/'> Linkedin<a>
  <p>Get Product  details  use</p>
  <a href='https://serverside-five.vercel.app/product'>https://serverside-five.vercel.app/product</a>
  <p class="cp-text">
  <p> Searh  Product Category Men,Women,Electronics And Makeup  </p>
  <a href='https://serverside-five.vercel.app/product/q?cat=makeup'>https://serverside-five.vercel.app/product/q?cat=Category_Name</a>
  
    
  <br />
  © Copyright 2022 <a href='https://www.linkedin.com/in/sanjanasinghh/'>Sanjana Kumari Singh</a>  S_&_D Shah. All rights reserved.
</p>`)
})


app.get('*')



app.listen(PORT, () => {
  console.log('server is satarted at 5000')
})



