 const express= require('express')
var product= require('./routes/product')
var user= require('./routes/user')
var cart= require('./routes/cart')
var address= require('./routes/add')
var dotenv=require('dotenv')
var mangoose = require('mongoose')
const { json } = require('express')
dotenv.config({ path: './.env' });
var key =process.env.URL_Database
console.log(key)
mangoose.connect(key,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB Connected…")
  })
var app = express()
app.use(json())
app.use('/user',user)
app.use('/product',product)
app.use('/cart',cart)
app.use('/address',address)

const PORT = process.env.PORT ||5000;
var count=1500
app.get('/',(req,res)=>{
  count++
  res.send(` <h1> Developed by S and D Shah</h1> 
<h1>
Visitor:${count}
</h1>
  <a href='https://www.linkedin.com/in/naseeb-khan-deenshah/'> Linkedin<a>
  <p>Get Product  details  use</p>
  <a href='https://serverside-five.vercel.app/product'>https://serverside-five.vercel.app/product</a>
  <p class="cp-text">
    © Copyright 2022 S and D shah. All rights reserved.
</p>`)
})






app.listen(PORT,()=>{
    console.log('server is satarted at 5000')
})



 