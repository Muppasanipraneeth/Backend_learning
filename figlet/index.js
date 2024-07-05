let figlet=require("figlet");
figlet("hey this is new man",function(err,data){
    if(err){
        console.log("something went worng");
    }
    console.log(data);
})