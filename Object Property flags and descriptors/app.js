// let User ={
 
//   Id:1,
//   Name:"Azimul",
//   Address:"Barishal",


// }

// // Obj Edit


// User.Id = 5;
// User.Name = "Shovo";
// User.Address ="Jalokhate";


// console.log(User.Id) // alhamdulla dan,

// Mathod loop //obj Itam ber korlam

// for(let Itam in User){

// console.log(User[Itam])

// }

 
// ami jodi obj gulo arry hisabe chi 

// console.log(Object.keys(User)) // alhamdulla ami obj gulo arrry hisabe parilam

// aytake ami jodi loop kore dai thole tar exampol


// forEach amar itam gulo ana deba

// obj keys deya ami proptayr nam gulo pai

// Object.keys(User).forEach((Itam)=>{

//     console.log(Itam)


// })





// ami kyss gulo ababe o paita pari 


//   let User ={
 
//     Id:1,
//     Name:"Azimul",
//     Address:"Barishal",
  
  
//   }


//   console.log(Object.getOwnPropertyNames(User)) // ayta deya ami obj ar kyss gulo parita pari 
// golobal obj ar ayporpaty ta deya ami dekta pari ture false kinha

// console.log(Object.getOwnPropertyDescriptors(User))


// prtek ta programir bha hackor ka  secruty deta gale jayta dorkar seta hoilo 


// Object.defineProperty(User,'Id',{

// value:1,
// writable:false,// ayta ka false kore dela kono prgramir bha hackir aytake chinge korta parbe nha
// enumerable:false,
// configurable:false,// aykane false kore dela kono programir aytake delede kore deta parbe nha 

// });

// User.Id=5// Hupor a flase kore dela  ami ayta chinge korta parbo nha 


// delete User.Id
// console.log(User.Id)

// akhon ami jodi loop chali thole Id ta loop ar moddo ar asbe nha tho ayrkom oyata coding korta pri

// for(let Itam  in User){

// console.log(User[Itam])

// }

// ayta khube gurottopunno besoy chilo 


// mathod get set


// const User={

//     Id:1,

//     UId:18,

//     Name:"Name"


// }

// // console.log(User.Id)
// // akhon ami id neya kaj korbo

// Object.defineProperty(User,'Id',{

// get: function(){

//     return "This Is UID " +this.UId // akhon ami jodi aytake access korta chi thole tar exampol


// },

// Set:function(Id){

// this. UId = Id
// }

// })

// console.log(User.UId) // ake id deya dutai pacce 





// const obj = {
//     "credentials" : async(x, y,)=>{
//         function fun(x,y){
//             console.log(x*y, 'arry function call')
//         }
//       const a =  [ x + y, [ console.log(x,'undefine')], fun(40,60),  x  =  10,  y = 20]  

//         return x[2]

//     },

//      'google': async (x,y,z)=>{
//         try{
//             return x + y + z
//         }

//         catch(e){
//             console.log(e)
//         }
//      }
// }


// console.log(obj.credentials(1,2),'credentials',obj.credentials[1] )
// console.log(obj.google(1,2,3),'google')

// console.log(Object.keys(obj,'oject keys'))


// let text = 'hello world'


// console.log(text.includes('world',),'includes')

// const url = 'https://www.google.com/search?q=javascript'

// const URL =  new URL(url).origin(
    
// )



// let anObject = {left: 1, right: 2};
// console.log(anObject.left);
// // → 1
// delete anObject.left;
// console.log(anObject.left);
// // → undefined
// console.log("left" in anObject);
// // → false
// console.log("right" in anObject);
// // → true



// let objectA = {a: 1, b: 2};
// Object.assign(objectA, {b: 3, c: 4});
// console.log(objectA);
// → {a: 1, b: 3, c: 4


let journal = [
    {events: ["work", "touched tree", "pizza",
    "running", "television"],
    squirrel: false},

    {events: ["work", "ice cream", "cauliflower",
    "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},

    {events: ["weekend", "cycling", "break", "peanuts",
    "beer"],
    squirrel: true},
  ]


  const x = journal.map((item)=>{
    return item.events[0]
  })


  console.log(x)



// let object1 = {value: 10};
// let object2 = object1;
// let object3 = {value: 10};
// console.log(object1 == object2);
// // → true
// console.log(object1 == object3);
// // → false
// object1.value = 15;
// console.log(object2.value);
// // → 15
// console.log(object3.value)


