const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const jwtpassword = "123456";
let port = 8000;
const app = express();
app.use(express.json())
// app.use(bodyParser.json());//it requires additional package

const allUsers = [
  {
    username: "praneeth",
    email: "muppasani12@gamil.com",
    password: "12111"
  },
  {
    username: "jayaprakash",
    email: "jayapra@gamil.com",
    password: "11121"
  },
  {
    username: "harsha",
    email: "harsha19@gamil.com",
    password: "191910"
  }
];

// function userExists(username, password) {
//   return allUsers.find(user => user.username === username && user.password === password);
// }
function userExists(username,password){
    let ans=false;
    for (const key in allUsers) {
        if (allUsers[key].username===username && allUsers[key].password===password) {
            return ans=true;
        }
    }
    return ans;
}

app.post("/signin", (req, res) => {
  const { username, password } = req.body;

  if (!userExists(username, password)) {
    return res.status(404).json({ msg: "The user doesn't exist in db" });
  }

  var token = jwt.sign({ username: username }, jwtpassword);
  return res.json({ token });
});

app.get("/user", (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ msg: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], jwtpassword); // Split 'Bearer <token>'
    const username = decoded.username;

    res.json({ msg: `Hello, ${username}` });
  } catch (err) {
    return res.status(403).json({ msg: "Invalid token" });
  }
});

app.listen(port, (err) => {
  if (err) {
    console.log("There is an error");
  } else {
    console.log("This port is listening");
  }
});
