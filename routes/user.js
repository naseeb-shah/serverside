const { response } = require('express')
const express = require('express')
const { create } = require('../models/user_model')
var usermodel = require('../models/user_model')
var router = express.Router()




router.get('/', (req, res) => {
try{
 usermodel.find((err,response)=>{
   if(err)
   res.send(err)
   else
   res.send(response)
 })
}catch(err){
   res.send(err)
}

})


//  createuser
router.post('/add', (req, res) => {
   try {

      console.log(req.body)
      var x = req.body

      var new_user = new usermodel({
         username: x.username,
         email: x.email,
         password: x.password,
         mobile: x.mobile,
         cart:[],
         add:
            {
               s: " ",
               d: " ",
               zcode:123,
               b: " ",
               c: " ",
               landmark: " "
       
           
         },
         orders:[]


      })

      new_user.save((err, response) => {
         if (err)
            res.send(response)
         else
            res.send(response)
      })







   } catch (err) {
      res.send(err)
   }

})


// login

router.get('/login', ((req, res) => {
   try {
      var x = req.body

      usermodel.findOne({ email: x.email, password: x.password }, (err, response) => {
         if (err)
            res.send(err)
         else if(response)
            res.send(response)
         else
         res.send("user Not found")
      })






   } catch (err) {
      res.send(err)
   }
}))



router.delete('/', (req, res) => {
   res.send("this user get delete")
})





module.exports = router












