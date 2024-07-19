const mongoose=require("mongoose");
const chat=require("./models/chat");

main().then(()=>console.log(" connection sucessfull")).catch((err)=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let allchats=[{
    from:"nikhil",
    to:"praneeth",
    msg:" hey praneeth"
},
{
    from:"ram",
    to:"raj",
    msg:" hey some money"
},
{
    from:"lucky",
    to:"gopi",
    msg:" happy birthday man"
},
{
    from:"azad",
    to:"praneeth",
    msg:" keep learning man  rock on"
}
]
chat.insertMany(allchats);