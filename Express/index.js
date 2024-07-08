const express=require("express");
const app=express();
let port =8000;

app.listen(port,(err)=>{
    if(err){
        console.log(" there is an errror");
    }else{
        console.log(" this port is listening");
    }
})
app.get("/health-checkup",(req,res)=>{
    const username=req.headers.username;
    const password=req.headers.password;
    const userid=req.query.kidneyid;
    if(!(username==="praneeth" && password==="pass")){
        res.status(404).json({"msg":"something is worng please check"});
        return ;
    }
    if(!(userid==1 || userid==2)){
        res.status(404).json({"msg":"something is worng with the input"});
        return ;
    }
    res.json({'msg':"your kidney looks fine you take rest"});
})