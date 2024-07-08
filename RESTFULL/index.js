const express = require("express");
const app = express();
const path = require("path");

const port = 8080;
// Set view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});



let posts = [{
    name: "praneeth",
    content: "i love coding"
}, {
    name: "ram",
    content: "hard working is the best way to achive any thing"
}, {  name: "raj", content: " (charles ) if you are going to try go all the way other wise don't even start  "}];

app.get("/",(req,res)=>{
    res.send(" this  is working");
})
// Route to render the EJS template
app.get("/post", (req, res) => {
    res.render("index.ejs");
    // res.render("index.ejs"); // Pass posts data to the template
});
app.get("/post/newform",(req,res)=>{
    res.render('form.ejs');
})
app.post("/post",(req,res)=>{
    // console.log(req.body);
    let { name ,content}=req.body;
    posts.push({name , content});
    res.send(" post request working")
    console.log(posts);
})