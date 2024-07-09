// function getAnimaldata(){
//     const url="https://fakerapi.it/api/v1/persons?_locale=fr_FR";
//     fetch(url).then(function(responese){
//         responese.json().then(function(realdata){
//             console.log(realdata);
//         })
//     })

// }
async function getAnimaldata(){
    const url="https://fakerapi.it/api/v1/persons?_locale=fr_FR";
   const response= await fetch(url);
   const realdata=await response.json();
   console.log(realdata);
   document.getElementById("container").innerHTML=JSON.stringify(realdata.data);

}

