const express=require("express");
const app=express();
const port ="8080";
const path=require("path");
// app.use(express.static(path.join(__dirname,"public")));
app.use(express.static("/public/css"));
app.set(" view engine"," ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.get("/hello",(req,res)=>{
    res.send(" hello");
})
app.get("/ig/:username",(req,res)=>{
    // let names=["praneeth","bhanu","raj","vinay"];
    let{username}=req.params;
    let instadata=require("./views/data.json");
    const data=instadata[username];
    console.log(data);
    console.log(instadata);
    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs",{username});
    }
    // res.render("instagram.ejs",{username,names});
    console.log(username);
})
app.get("/random",(req,res)=>{
    let value=Math.floor(Math.random()*6)+1;
    res.render("random.ejs",{num:value});

})
app.listen(port,()=>{
    console.log("  the app is listened");
})