var mongoose= require("mongoose")


var product_shcma=mongoose.Schema({
    name:String,
    price :Number,
    reviews:Number,
    cat:String,
    img:[String] 
})

var product=mongoose.model('product',product_shcma)
module.exports=product