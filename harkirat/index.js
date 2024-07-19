const express=require("express");
const app=express();
let port =3000;
function ticketchecker(req,res,err){
    const ticket=req.query.ticket;
    if(ticket==="free"){
        next();
    }else{
        res.status(403).json({"msg":" acessed denied"});
    }

}
function oldage(req,res,next){
    if(req.query.age>14){
        next();
    }else{
        res.json({"msg":" sorry for the inconvinenice"});
    }
}
function checkage(age){
    if(age>18){
        return true;
    }else{
        return false;
    }
}
app.use(oldage);
app.listen(port,(err)=>{
    if(err){
console.log(" there is an error");
    }else{
console.log(" this app is listening ");
    }
});
app.get("/user1",(req,res)=>{
    // if(checkage(req.query.age)){
    //     res.json({"msg":"you rode the first ride here "});
    // }else{
    //     res.json({"msg":"sorry for the inconvenience"});
    // }
res.send(" here ther you to ride");
});
app.get("/user2",(req,res)=>{
    res.send(" you rode the first ride");
});
app.get("/user3",(req,res)=>{
    res.send(" you rode the first ride");
})