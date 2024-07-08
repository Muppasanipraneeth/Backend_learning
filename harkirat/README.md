##  harkirat teaching
- install  the npm init -y
- install the npm install express
- to run the express server we have use the nodemon index.js
- code 
` const express = require("express");
const app = express();
let port = 3000;

app.listen(port, (err) => {
    if (err) {
        console.log("There is an error");
    } else {
        console.log(`This port is listening on ${port}`);
    }
});

app.get("/health-checkup/:kidneyid", (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const userid = parseInt(req.params.kidneyid); // convert to integer

    if (!(username === "praneeth" && password === "pass")) {
        res.status(404).json({ "msg": "Please check the input" });
        return;
    }

    if (!(userid ==1 || userid ==2)) {
        res.status(404).json({ "msg": "Your userid is wrong, check it" });
        return;
    }

    res.json({ "msg": "Your kidney looks fine, don't worry" });
});

app.get("/bloodtest", (req, res) => {
    res.send("Blood test taken");
}); `
- this sinppet
`app.get("/kidney-checkup",function(req,res){
    console.log(" this is first function");
},function(req,res){
    console.log(" this is second function");
});`

- this is actuall route sinppet
index.js-` app.get("/kidney-checkup",function(req,res,next){
    console.log(" this is first function");
    next();

},function(req,res){
    console.log(" this is second function");
});`

# using the middleware
`function calucltaereq(req,res,next){
    count++;
    console.log(count);
    next();

}
app.get("/health-checkup",calucltaereq,(req,res)=>{
res.send("this is presently closed");
});
app.get("/health-checkup1",calucltaereq,(req,res)=>{
    res.send("this is presently closed");
    });
 `
 - in the place of the middleware passing throught every route we can use the app.use(middleware);
 - this is shown below
`let count=0;
function calucltaereq(req,res,next){
    count++;
    console.log(count);
    next();


}
app.use(calucltaereq);
app.get("/health-checkup",(req,res)=>{
res.send("this is presently closed");
});
app.get("/health-checkup1",(req,res)=>{
    res.send("this is presently closed");
    });
    
`

- another snippet
- `
let count=0;
function calucltaereq(req,res,next){
    count++;
    console.log(count);
    next();


}
app.use(calucltaereq);
app.get("/health-checkup",(req,res)=>{
res.send("this is presently closed");
});
app.get("/health-checkup1",(req,res)=>{
    res.send("this is presently closed");
    });
    
// ya this working the count is increasing here
 
 1 . zod installation is npm  install  zod
 `
 const z=require("zod");
const schema=z.string().email();
const respone=schema.parse("dsiohfgiahs");
console.log(respone.error); `
# this snippet gives error because its wrong input
