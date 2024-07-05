let express=require("express");
let app=express();
let port=3000;
// console.dir(app);
app.listen(port,(err)=>{
if(err){
    console.log(err);
}else{
    console.log(" it is listening");
}
});
// app.use((req,res)=>{
//     console.log(" request recived");
//     let code="<h1>hello praneeth is here</h1>";
//     res.send(code);
// })
app.get("/",(req,res)=>{
    res.send("you have contacted root path");
});
// app.get('/apple',(req,res)=>{
//     res.send("you have contacted apple path");
// })
// app.get('/orange',(req,res)=>{
//     res.send(" you have contacted orange path");
// })
// app.get('*',(req,res)=>{
//     res.send(" you reached worng page");
// })
app.get('/:username/:id',(req,res)=>{
    let {username,id}=req.params;
    // console.log(req.params);// this path parameter
    res.send(` welcome to the webpage @${username}`);
})