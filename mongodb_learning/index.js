const mongoose=require("mongoose");
main().then(()=>console.log(" connection sucessfull")).catch((err)=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
});
const User=mongoose.model("User",userSchema);
// const user3=new User({
//     name:"harsha",
//     age:20,
//     email:"harsha19@gmail.com"
// });
// user3.save();
// user2.save().then(result=>console.log(result)).catch(err=>console.log(err))
// User.insertMany([{
//     name:"krishana",
//     age:19,
//     email:"krishana@gamil.com"
// },{  name:"ram",
//     age:19,
//     email:"ram@gamil.com"},{  
//         name:"nikhil",
//         age:19,
//         email:"nikhil@gamil.com"}]).then(res=>console.log(res)).catch(err=>console.log(err));
User.findOneAndUpdate({name:"praneeth"},{age:21},{new :true}).then(res=>console.log(res));