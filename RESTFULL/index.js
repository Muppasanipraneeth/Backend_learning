
const express = require("express");
const app = express();
const path = require("path");//for the path  files where we can get  the acess from the diffrenet folder of parent
const { v4: uuidv4 } = require('uuid');//this is for the getting random ids
const methodoveride=require("method-override");// the froms has only two methods where one is post and the get to get more like delete patch we use this


app.use(methodoveride("_method"));
const port = 8080;
app.use(express.urlencoded({extended: true}));// is middleware in an Express.js app that parses incoming requests with URL-encoded payloads, supporting rich objects and arrays
// Set view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});



let posts = [{
    id:uuidv4(),
    name: "praneeth",
    content: "i love coding"
}, {
    id:uuidv4(),
    name: "ram",
    content: "hard working is the best way to achive any thing"
}, {id:uuidv4(),  
    name: "raj", content: " (charles ) if you are going to try go all the way other wise don't even start  "}];

app.get("/",(req,res)=>{
    res.send(" this  is working well !");
})
// Route to render the EJS template
app.get("/post", (req, res) => {
    res.render("index.ejs",{posts});
    // res.send(" this is also working well");
    // res.render("index.ejs"); // Pass posts data to the template
});
app.get("/post/newform",(req,res)=>{
    res.render('form.ejs');
})
app.post("/post",(req,res)=>{
    // console.log(req.body);
    let { name ,content}=req.body;
    let id=uuidv4();
    posts.push({id,name , content});
    res.redirect("/post");
    console.log(posts);
})
app.get("/post/:id",(req,res)=>{
let id =req.params.id;
let post=posts.find((p)=>id ===p.id);
if(post){
console.log(post);
}else{
console.log("not found");
}

res.render("show",{post});
});
app.patch("/post/:id",(req,res)=>{
    const id=req.params.id;
    const newcontent=req.body.content;
    let post =posts.find((p)=> id===p.id);
    post.content=newcontent;
    
    console.log(newcontent);
res.redirect("/post");
})
app.get("/post/:id/edit",(req,res)=>{
    let id =req.params.id;
console.log(id);
let post=posts.find((p)=>id ===p.id);
if(post){
    console.log(id);
    res.render("edit.ejs",{post});

}else{
    console.log(id);
    res.send(" there is an error");

}

});
app.delete("/post/:id",(req,res)=>{
    let id =req.params.id;
     posts=posts.filter((p)=>id !=p.id);
     res.redirect("/post");
    // res.send(" this post is sloved");

});