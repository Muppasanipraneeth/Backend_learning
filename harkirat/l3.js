const express=require("express");
const app=express();
let port =8080;
app.listen(port,(err)=>{
if(err){
    console.log(" there is an error");
}else{
    console.log(" this port is working");
}
    
})

app.use(express.json());

app.post("/health-checkup",(req,res)=>{
const kidney=req.body.kidneys;
const length=kidney.length;
res.send(" you have "+ length +"kidneys");
});
// if the user does not enter the correct input 
//it gives an error so to overcome this we use inbuilt
app.use((err,req,res,next)=>{// the express will check if any error occures then it will check for the 4 parameter with err in it
res.json({"msg":"sorry for the inconvenience server crashed"})

});

