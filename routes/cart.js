
const { response } = require('express')
var express = require('express')
var cartroute = express.Router()
var usermodel = require('../models/user_model')




cartroute.get('/:id', (req, res) => {
     try {
          var id = req.params.id
          if (id.length !== 24){
               res.send("Invalid User Details")
               return
          }
          usermodel.findById(id, (err, response) => {
               if (err)
                    res.send(err)
               else if(response)
                    res.send(response.cart)
          else
          res.send("Invalid")
          })


     } catch (err) {
          res.send(err)
     }

})


cartroute.post('/add/:id', (req, res) => {
     
     try {
          var id = req.params.id

         
     var product = {
          "name":req.body.name,
          "price":req.body.price,
          "q":req.body.q
     }
     if(!product.name||!product.price||!product.q){
          res.send("Plaese fill propper detiils")
          return
     }
     if (id.length !== 24){
          res.send("Invalid User Details")
      return}
          usermodel.findByIdAndUpdate(id, { $push: { cart: product} }, (err, reponse) => {
               if (err)
                    res.send(err)
               else
                    {
                         usermodel.findById(id,(err,d)=>{
                              if(err){
                                   res.send(err)
                              }
                              else{
                                   
                                   // console.log("sai")
                                   res.send(d.cart)
                              }
                         })
                    }
          })

     } catch (err) {
          res.send(err)
     }

}
)




cartroute.delete('/delete/:id', (req, res) => {
     
     try {
          var id = req.params.id
     var product = req.body.name 
     var price = req.body.price 
     // var id=req.body.id
     console.log()
     if (id.length !== 24){
          res.send("Invalid User Details")
      return}
          usermodel.findByIdAndUpdate(id, { $pull: { cart: {"name":product,"price":price}} }, (err, reponse) => {
               if (err)
                    res.send(err)
               else
                    {
                        
                         res.send(product)
                    }
          })

     } catch (err) {
          res.send(err)
     }

}
)






module.exports = cartroute