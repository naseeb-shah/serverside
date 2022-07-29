 var mongoose=require("mongoose")



 var Count_schema=mongoose.Schema({
    name:String,
    vistor:Number
 })

 var count=mongoose.model('vistor',Count_schema)
 module.exports=count