
const { response } = require('express')
var express = require('express')
var addroute = express.Router()
var usermodel = require('../models/user_model')




addroute.get('/:id', (req, res) => {
     try {
          var id = req.params.id
          if (id.length !== 24){
               res.send("Invalid User Details")
               return
          }
          usermodel.findById(id, (err, response) => {
               if (err)
                    res.send(err)
               else
                    res.send(response.add)
          })


     } catch (err) {
          res.send(err)
     }

})


addroute.post('/add/:id', (req, res) => {
     
     try {
          var id = req.params.id
     var a = req.body
     

     var address={
"zcode":a.zcode,
"s":a.s,
"d":a.d,
"b":a.b,
"c":a.c,
"landmark":a.landmark
     }
     if (id.length !== 24){
          res.send("Invalid User Details")
      return}
          usermodel.findByIdAndUpdate(id,  { add: address} , (err, reponse) => {
               if (err)
                    res.send(err)
               else
                    {
                         usermodel.findById(id,(err,d)=>{
                              if(err){
                                   res.send(err)
                              }
                              else{
                                   res.send(d.add)
                              }
                         })
                    }
          })

     } catch (err) {
          res.send(err)
     }

}
)


module.exports = addroute