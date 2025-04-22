// array ar moddo amara number, string,  object, ta o rakte pare


const Product = [

{Name: " Modil",price:100,Ram:10},
{Name: " Desktop",price:200,Ram:20},
{Name: " I Phone",price:300,Ram:30},
{Name: " Culouter",price:400,Ram:40},
{Name: "SP Pc",price:500,Ram:50},
{Name: " Kybord",price:600,Ram:60},
{Name: " Vivo",price:700,Ram:70},
{Name: " SAMSAM",price:800,Ram:80},
{Name: " Realmi",price:900,Ram:90},
{Name: " TV",price:1000,Ram:99},
];


Product.reverse(); // or kaj boro thke choto kora ar 
Product.sort() // or kaj choto take boro kora 

console.log(Product)



// console.log (Product[0].Name);




// Method 1

// x = Product.forEach(Itam =>{
// console.log ( Itam.price)
// })



// Method 2

// Filter ar kaj hocce < ay  braket a tar choto sonkha guala count korbe > 
// ay breaka a tar houpor sonkha gulo count korbe 

// let c = Product.filter((Itam)=>{
// return Itam.price <400;
// });
// console.log ( c);





// Method 3

// find ar kaj hocce se String shoho se huporir Name gula true false count  korbe
// oi khanir sete ayata match hocce naki


// const x =Product.find((Itam)=>{

//     return Itam.Name===" Desktop";

// });
// console.log( x)



// every ar kaj hocce sob gula chake kore se boro sonkhatai count kore ture hisabe disply korbe/
// se chake tar boro sonkha ace ki nha seta chake kore se rejult deba
// defolt babe chake korbe tar huopur ar sonkha ace kina 


// const b = Product.every((Itam)=>{
//     return Itam.price <99
// })

// console.log ( b);



// some bolte bojay Boolean valou se defolt babe true folce chake kore 
// some ar nica kono Number ace kina ayta hilo some ar kaj 

// const o = Product.some((Itam)=>{
// return Itam.price <200
// })

// console.log ( o)



// rducr ar kaj hocce frist last ar ta pabe tar por se price ar kace jabe se praice ta neya asbe se jog brackt 
// a rekha deba tar por tar por se abr jog korbe jog korte korte last rejult ta ber kore deba


// const x =Product.reduce((Jogkorbe,pricearkeceneyajabe)=>{
// return pricearkeceneyajabe.price +Jogkorbe
// },0)

// console.log (x);






// map hoilo amon akta conseft jeita akta sadaron array ta neya asbe
// const e = Product.map((itam)=>{

//     return itam.Name

// })
// console.log ( e)




// aykhe sadaronoto boolean valou ta use kora hoy betor ar
//  sting name ar sate melca ki nha seta sadaron babe chacke kore 


// const x = [2,3, 4, 5,6,7,"Azimul",8,9,0,]
// const b = x.includes("Azimul");
// console.log (b)