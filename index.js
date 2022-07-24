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

app.get('/',(req,res)=>{
  res.send(` <h1> Developed by S and D Shah<h1>
  <a href='https://www.linkedin.com/in/naseeb-khan-deenshah/'> Linkedin<a>
  `)
})






app.listen(PORT,()=>{
    console.log('server is satarted at 5000')
})



 