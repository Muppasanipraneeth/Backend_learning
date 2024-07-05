let array=[1,2,3,4];
console.log(array);
let array1=array.map((x)=>x*2);
console.log(array1);
array.sayhello= ()=>{
    console.log("hello");
}
array1.sayhello=()=>{
    console.log("hello");
}
console.log(array.sayhello===array1.sayhello);//because of the different objects
