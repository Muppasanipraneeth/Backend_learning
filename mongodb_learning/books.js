const mongoose=require("mongoose");
main().then(()=>console.log(" connection sucessfull")).catch((err)=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength:40
        
    },
    author:{
        type:String
    },
    pages:{
        type: Number
    },
    price:{
        type:Number
    },
    discount:{
        type:Number,
        default:0
    },
    catgeroy:{
        type:String,
        enum:["friction","Non-friction"]
    }
})
const book=mongoose.model("book",bookSchema);
const book1=new book({
    title:"think like a monk",
    author:"Gay shetty",
    pages:400,
    price:400,
    catgeroy:"friction"
})
book1.save().then(res=>console.log(res)).catch(err=>console.log(err));
// book.use();