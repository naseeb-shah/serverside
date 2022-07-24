var mongoose=require('mongoose')


var usershcema=mongoose.Schema({
    username:String,
    email :String,
    password:String,
    mobile:Number,
    cart:[Object]
    ,add:{
        s:String,
        d:String,
        zcode:Number,
        b:String,
        c:String,
        landmark:String

    },
    orders:[Object]
})



var user=mongoose.model('user',usershcema)
 module.exports=user