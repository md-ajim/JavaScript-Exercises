// map hocce akta godaun hote pare tar moddo 
// String,Number, bariabel sob gulo rakta parbo
//map ar moddo ami ja kono data ka use korta parbo.kys valou
// map ar moddo amra je kono valu rakta parbo boolean belu hok seta je valu hok

// let MyMap = new Map();


// MyMap.set(1,"Azimul");
// MyMap.set("2","Tarek");
// MyMap.set("Name","Sadik");
// MyMap.set("Age", 20);
// MyMap.set(true,"Isactive");

// console.log(MyMap.get("2")) // akhne kaj hocce muloto frist ta selct kolrei 2 ta pabo ato hocce cace senctip
// console.log(MyMap.entries()) //ayta amdir enty hisabe deyaca
// console.log(MyMap.keys()) // se tae keys number gula deya detaca

// Akhon ami jodi ayata ke interat tar exampol



// dekha jacce ami amar valou gula parilam

// MyMap.forEach((valou,key)=>{
// console.log(valou);

// })


// ami key chila o ami key deya korta parbo
 

    
     // ay babe o sow korta pari valou key dutai asce
// MyMap.forEach((valou,key)=>{
//     console.log(valou,key);
    
//     })
    



// let MyMap = new Map();

// let User = {

// Name:"Azimul",
// Address:"Dhaka",

// Post:"Nacholmohol",


// }


// MyMap.set(1,"Azimul");
// MyMap.set("2","Tarek");
// MyMap.set("Name","Sadik");
// MyMap.set("Age", 20);
// MyMap.set(true,"Isactive");
// // MyMap.set(User,"There are User in The Objict");
// MyMap.set('User', User)





// ami chial aytake for of deya o korta parbo ,
// ami amar keys gulo pacce
// for (Itam of MyMap.keys()) {
//     console.log(Itam)
   
// }


// valou gula sow korta chila ami amar valou gula o sow korata parbo

// for (Itam of MyMap.values()) {
//     console.log(Itam)
   
// }


// all  user ar   nam gula se show korbe

// for (Itam of MyMap.values()) {
//     console.log(User)
   
// }


// MyMap konos kono shobdo ace ki nha 
// seta o chake korta parbo ture false ber kore deba
// console.log(MyMap.has("age"))


// ami jodi chi ddelete korbo seta o korta parbo

// MyMap.delete("Name");
// console.log(MyMap)




// aybar ami jodi chi kono akta Object ka kye hisabe us 
// korbo seta o ami korta parbo 

// console.log(MyMap.get (User))

// console.log(MyMap.get ('User'))







// 2 method

// let mySet = new Set();

// mySet.add({ Name:"Azimul"}, [20, "Romjan"], true ,20, null)


// console.log(mySet);

// ami jodi kyes hisabe dekhi tyle ki pai

// console.log(mySet.values()); aytake se Object ar moto kore deyca



// set hocce key and valou set ar moddo holo colection of valou objcet 
// set ami keye deta prbo nah

// let mySet = new Set ()

// mySet.add({Name:"Azimul islam"},[ 29 ," Ksir botol"],( "kordi ajad"), 20, true , null, );

// console.log ( mySet)

// console.log( mySet.keys())

// console.log( mySet.values())

// mySet.add("Nasim");
// mySet.add(1);
// mySet.add([10,20,30])
// mySet.add({Name:"Nasim", age:21})

// console.log(mySet.values())// tho valou gulo parce sate akta objicet o peyce

// mySet.forEach(valou => {

//      console.log(mySet.values()) // prtita valu ka ami soew korata prbo
     
// });
// ayta deya valou ace ki nha seta dekta prbo ture fals chcke korta parbo

// console.log(mySet.has(1))

// console.log(mySet.entries()) // atrice gulo dekta prlam

// for ( Itam of mySet.entries()) {
    
//      console.log(Itam);
// } 

// tho ami aygula Array hisebe peyace


// let i = 0;
 
// for ( Itam of mySet.entries()) {
    
//      console.log(Itam[i]);

//      i ++;
// } 

// console.log(mySet.size)

// map hocce akta obj ar moto kay and valou obj ar take aytai bsi subida ace  je korno deta  taype stice korta parbo kyse valou hisbe 

// set hocce ar moddo ami kye valou us korta parbo arry deya debo .ak akta valou akta kore obj toiri kore debo



const user ={
     x:'Azimul Islam'
}

lily = {name:'lily',age:21}


const mymap = new Map();

function add(valou){
     return 'Abul'
}

const mymap1 = new Map([
     [user,'kuddos'],
     [lily,add()]
]);


console.log(mymap1.get(lily))

mymap.set(user,'Kuddos').set(lily,'Sadik').set(lily.age,20)

mymap.get(user)


mom = {
     name:'Mom',
     age:21
}

console.log(mymap.get(user))
console.log(mymap.size)

console.log(mymap.keys(),'keys')
console.log(mymap.values(),'values')
console.log(mymap.entries(),'enteries')
console.log(mymap.has(user),'has')
console.log(mymap.delete(user),'delete')


 arr = []

mymap.forEach(ele =>{

     arr.push(ele)
     console.log(ele)
     // arr.pop(ele[0])
})

console.log(arr,'arr')


for (let user of mymap){
     console.log(user,'user')
}

const kyes =[...mymap]

console.log(kyes)

console.log(mymap.clear(),'clear')