const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const port=8000;
const path=require("path");
const method_overide =require("method-override");
app.use(method_overide("_method"));
app.use(express.urlencoded({extended:true}));
const { error } = require('console');
 app.set("view engine","ejs");
 app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'office',
  password: 'praneeth'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});

const getData = () => {
  return [
    faker.number.int(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password()
  ];
}

const insertData = () => {
  const q = 'INSERT INTO user (id, name, email, password) VALUES ?';
  let data = [];
  for (let i = 0; i < 100; i++) {
    data.push(getData());
  }

  connection.query(q, [data], (err, res) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    console.log('Data inserted successfully:', res);
  });
}

// insertData();


app.listen(port,(err)=>{
  if(err){
    console.log(" there is an error");
  }else{
    console.log(" this port is listening");
  }
})
app.get("/check", (req, res) => {
  const q = `SELECT count(*)  FROM user`;
  
  try{
    connection.query(q, (err, result) => {
      if(err) throw(err);
      const count=result[0]["count(*)"];
      console.log(result[0]["count(*)"]);
      res.render("home",{count});
    });
  }catch(err){
    console.log(" there is an error");
    res.send(" there is an error");
  }
});
app.get("/user",(req,res)=>{
  const q=`select * from user`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw(err);
      // res.send(result);
      res.render("show",{result});
    })
  }catch(err){
    res.send(" there is an error");
  }
});
app.get("/user/:id/edit",(req,res)=>{
  let id=req.params.id;
  let q=`select * from user where id='${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw (err);
      let use_details=result[0];
      console.log(result);
      res.render("edit",{use_details});
    })

  }catch(err){
res.send(err);
  }

 
})
app.patch("/user/:id",(req,res)=>{
  let id= req.params.id;
  let q=`select * from user where id='${id}' `;
  const {password :formpass, username: newname}=req.body;
  try{
    connection.query(q,(err,result)=>{
      if(result.length===0){
        res.status(404).send(" the user not found");
      }
      if(err) throw (err);
      let user=result[0];
      let pass=user.password;
      if (formpass.trim() !== pass.trim()) {

        res.send(" your entered password is false");

      }else{
        let q1 = `UPDATE user SET name='${newname}' WHERE id='${id}'`;
        connection.query(q1,(err,result)=>{
          if(err) throw (err);
        res.redirect("http://localhost:8000/user");
        })
      }
      // res.send(user);
    })

  }catch(err){
res.send(" there is an error");
  }

});
app.get("/newdata",(req,res)=>{

  res.render("addnew");
})
app.post("/newdatas",(req,res)=>{
  let {username:name,password:password,email:email}=req.body;
  console.log(name);
  console.log(password);
  console.log(email);
  let id=faker.number.int();
  let q3 = `INSERT INTO user (id, name, email, password) VALUES (${id}, '${name}', '${email}', '${password}')`;
  let values=[id,name,email,password];
try{
  connection.query(q3,values,(err,result)=>{
    if(err) throw (err);
    console.log(result);
    res.redirect("/user");
  })
}catch(err){
  res.send(" there is an error");
}
})
app.get("/checking/:id",(req,res)=>{
 let id=req.params.id;
 console.log(id);
  res.render("check",{id});
})
app.post("/checking/:id",(req,res)=>{
  let {user:formname,password:formpassword ,id:formid}=req.body;
  console.log(formname);
  console.log(formid);
  console.log(formpassword);
  let values=[formname,formid,formpassword];
  let q4=`select * from user where id='${formid}'`;
  try{
    connection.query(q4,values,(err,result)=>{
      if(err) throw (err);
      let val=result[0];
      console.log(val);
      let email=val.email;
      console.log(email);
       let  password=val.password;
       console.log(password);
      if(formname!=email && formpassword!=password){
        res.send("check the email and password");
       
      }else{
        let q5 = `DELETE FROM user WHERE id = ${val.id}`;
        try{
          connection.query(q5,(err,result)=>{
            if(err) throw err;
            res.redirect("/user");
          });

        }catch(err){
          res.send(" there is an error")
        }

      }
    })

  }catch(err){
    console.log(" there is an error");
res.send(" there is an error")
  }

})
// connection.end(err => {
//   if (err) {
//     console.error('Error closing the connection:', err);
//     return;
//   }
//   console.log('Connection closed.');
// }); 