function fetchUserdata(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve({name: "nipun", url: "https://chaicode.com"});
        }, 2000);
    });
}

async function fetchData(){
    try{
        console.log("fetching user data ");
        const userData = await fetchUserdata();
        console.log("user data fetched", userData);
    }catch(error){
        console.log(error);
    }
}

fetchData();