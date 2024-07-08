const zod=require("zod");
function validateInput(arr){
    const schema=zod.array(zod.number());
    const respone= schema.safeParse(arr);
    console.log(respone);
}
validateInput([1,2,3]);
function validateEmail(obj){
    const schema =zod.object({
        email :zod.string().email(),
        password :zod.string().min(8)
    })
    const resposne=schema.safeParse(obj);
    console.log(resposne);
}
let obj={
    email:"muppasanipraneeth19@gmail.com",
    password:"praneeth82"
}
validateEmail([21,2]);

