var mypromise = new Promise((resolve,rej) =>{

    // fetch("https://dummy.restapiexample.com/api/v1/employees")  //fetch function returns a promise;
    // .then((res)=>{
    //     return res.json();      //returns a promise as well
    // })
    // .then(data => {
    //     console.log(data)

    //     resolve("Data fetched!!")
    // })
    // .catch(err => console.log(`Error response - ${err}`));
    setTimeout(()=>{
        resolve(2);
    },1000);
})

mypromise.then((res) => console.log(res));