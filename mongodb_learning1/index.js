const express=require("express");
const mongoose=require("mongoose");
const methodOveride=require("method-override");
const app=express();
const path=require("path");
const port =8000;
const chat=require("./models/chat");
const { log } = require("console");
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
main().then(()=>console.log(" connection sucessfull")).catch((err)=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
app.use(methodOveride("_method"));

app.listen(port,(err)=>{
    if(err)console.log(err);
    console.log("this port is listening");
})
app.get("/chats",async(req,res)=>{
    let chats= await chat.find();
    console.log(chats);
    res.render("miniapp",{chats});
})
// mongoose.connection("");
app.get("/",(req,res)=>{
    res.send(" this is working now you can do your setup")
});
app.get("/chats/new",(req,res)=>{
    res.render("newchat");
})
app.post("/chats/new",(req,res)=>{
    let {from :fromp,msg:message,to:top}=req.body;
   let newchat=new chat({
    from:fromp,
    msg:message,
    to:top
   })
   newchat.save().then(res=>console.log(res)).catch(err=>console.log(err));
//    console.log(newchat);
res.redirect("/chats");
})
app.get("/chats/:id/edit",async(req,res)=>{
let id=req.params.id;
let Chats= await chat.findById(id);
res.render("edit",{Chats});
console.log(id);
// res.send(" this is updated");
});
app.put("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let {msg:newmsg}=req.body
    console.log(id);
    let user=await chat.findByIdAndUpdate(id,{msg:newmsg});
    console.log(user);
    res.redirect("/chats");

})
app.put("/chats/:id/delete",async(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let user=await chat.findByIdAndDelete(id);
    console.log(user);
    res.redirect("/chats");

})