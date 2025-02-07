function fetchdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           let success = true;
           if(success){
               resolve("data fetched succeesfully");
           }else{
               reject("data not fetched");
           }
        },2000);
    });
}
fetchdata().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});
