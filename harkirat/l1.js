const express = require("express");// this is the first snippet 
const app = express();
let port = 3000;
function usermiddleware(username,password){
    if(username!="praneeth",password!="pass"){
        return false;
    }
    return  true;

}
function idmiddleware(kidneyid){
    if( kidneyid!=1  || kidneyid!=2 ){
        return false;
    }
    return true;
}

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
});
