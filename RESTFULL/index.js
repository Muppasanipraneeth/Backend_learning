
const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');



const port = 8080;
app.use(express.urlencoded({extended: true}));
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
    console.log(id);
    posts.push({id,name , content});
    res.redirect("/post");
    console.log(posts);
})
app.get("/post/:id",(req,res)=>{
let id =req.params.id;
console.log(id);
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
    res.send(" this is working ")
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