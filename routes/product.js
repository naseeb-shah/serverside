const { response } = require('express')
const express= require('express')
var count =999
 var router=express.Router()
 var produtmodel=require("../models/Product_model")



 router.get('/',(req,res)=>{
count++
   produtmodel.find((err,response)=>{
      if(err)
      res.send(err)
      else
      res.send({data:response,total_product:response.length,total_request:count})
   })
   //  res.send("this user get route")
 })

 router.post('/add',(req,res)=>{

try{
   var x = req.body
   var new_product= new produtmodel({
      name:x.name,
      price :x.price,
      reviews:x.reviews,
      cat:x.cat,
      img:x.img ,
   
   })
   new_product.save((err,reponce)=>{

      if(err)
      res.send(err)
      else
      res.send(reponce)
   })   

}catch(err){
   res.send(err)
}

})

 router.delete('/delete/:id',(req,res)=>{


    var id= req.params.id
    console.log(id)
try{
 produtmodel.findByIdAndDelete(id,(err)=>{
   if(err)
   res.send(err)
   else 
   res.send("Deleted Product Successfully")
 })


}catch(err){

}
    
 })

 



 module.exports=router







 




 