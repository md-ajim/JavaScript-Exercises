const myPromise =new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        const  randomNumber=Math.random()
        console.log(randomNumber)
        if(randomNumber<0.5){
            resolve()
        }
        else{
            reject(new Error('Error: Random number is greater than or equal to 0.5'))
        }
    },2000)

})
myPromise.then((result)=>{
    console.log('Premiss resolved with: ',result)
})
.catch((error)=>{
    console.log('Promise rejected with:',error)
})

console.log('all is dane')