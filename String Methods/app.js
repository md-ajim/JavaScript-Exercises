// charAt
 //conat
// startswith
// endswith
// includes
// indexof
// last Indexof
 //repeat
 //replace
 //search
 //salice
 //split
 //substr
// to Uppercase



// chercter ar kaj hoilo select kora word ka,

// let Chercter ="Hello world"
// console.log (Chercter.charAt(2))



// concat

// let x =  " Md";
// let c = " Azimul";



// concat hocce 2 ta string ka join  kora
// console.log ( x.concat(c));

// onno system ao jora lagano jay + deya exampol
// console.log( x+c)



// startswith

// aytay kaj kore sadaron oto protek ta word chake kore
// chake kore jodi pay se ture janiya deba ar jode nha pay se false janiya deba

// let x = " Hello world";
// console.log( x.startsWith("h"))



// endswith

// endsWith ar kaj hocce se last shonkha  milano jode pay 
// thole ture kore deba ar jode nha pay se fals kore deba

// let c = " Hello world";
// console.log(c.endsWith("rld"))


// strng neya kaj korar option
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


//includes

// includes ar kaj hocce se defolt babe ture false chke kore User ki email deyace seta se chake kore @ jode pay thoele 
// ture kore deva ar jode nha pay se false kore DOMSettableTokenList;
// let email = "azimulisalm@w56653gamil.com"

// if (!email.includes("@")) {
//     console.log( " Invalid emil")
    
// }
// else{

// console.log( " Valied Emil")
// }



// indexof

// indexof ar kaj hocce se frist tahke suro kore console a
//  ami jayta debo seta total index number ta deya debo
// Kotah take ami sturd korta jacce

// let x =  "Hello World How are you";
// console.log (x.indexOf("How"))


// let x =  "Hello World How are you";
// console.log (x.indexOf("How"))

// indexof ar 2 number mathod 
// ay mathod dara bojano hoce world lerkha 
//frist chariya 2nd koto number a takta pare

// let c = "Hello world how are You world"
// console.log(c.indexOf("w",15))



// last indexof

// let x = "Hello I hove are world How are You";

// last indexof ar kaj hocce se 0 thke suro kore
// se ami jeyta console korce tar idex number ta ber kore deba 

// or ar akta kaj hocce strng a jodi 2 shobdo
// theke thole koma deya setake frist word ar number ta  chariya theke 
// barti number ta deya debo console a, 

// console.log (x.lastIndexOf("are",10))




// String ar number ka repat kore

// let x = "Hello word ";
// console.log(x.repeat(2))




// replace ar kaj hocce se lekha take replace 
// kore day nicar ta hocce seta sob word ka replace kore deaba g option deya
// let x = "Hello world How are you world";
// console.log ( x.replace("world","Bangladesh"))
// console.log ( x.replace(/world/g,"Bandladesh"))



// search

// search ar kaj hocce string ta koto number a acae seta khuje ber kore deba

// let x = "Hello world How are you";
// console.log(x.search("world"))




// ami amar icce moto word rekha deta parbo slice kore

// let x = " Hello world How are You Binginer";
// console.log(x.slice(x.length -15))




//ayata akta darun mathod amra akta arry ka 
// poranito kore seta abar jora lagano  somab 

// let x = "Hello world how are you"
// let x = "Hello world how are you"

// console.log(x.split(" ").join(" "));

// console.log(x.split("***"))
// consoel.log (x.[1])



//substr

//substr muloto kaj kore maj jekhan take ami word ta chacce,
// sekhan thke suro hoye ami koyata word chcce seta count hobe

// let x = " azimul islam is cruzy";
// console.log(x.substr(14,2))
// console.log(x.substr(0,6))


//treem hocce dui pasir spice kata day;


// let x = " Hello wold How are You "
// console.log(x.trim())




//to Uppercase

// console.log(x.toUpperCase())
// console.log(x.toLowerCase())