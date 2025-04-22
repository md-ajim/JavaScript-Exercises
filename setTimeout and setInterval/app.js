// aytake javaScript ar Skoyalozing Bole  exampol amra onek somai dekha jacce online exam 
// dai bha koono website a dukle setkane kicu khon por submit ar option ase
// bha dekha jacce kono akta time ar betor user ka kicsu korta decce jemon typong .com
// total kotha javaScript ar jode kono kicu timeing korta chi thoele ami ayta us korta hobe tar exampol


//setTimeout(Call function - Name "Daly Time", "argumnets....")

// function AskQustion(){

// console.log ("What s' Can Midn");

// };

// setTimeout(AskQustion,5000) // counting ta milli secend a hobe 


// ami jode derakli chi tahole ami ay babe us korta prbo tar exampol


// function AskQustion(Name){

//     console.log ("What s' Can Midn" ,"Azimul");
    
//     };
    
//     AskQustion(Name)


    // setTimeout(AskQustion,5000)



    // ami chila name Sow korata parbo
    // function AskQustion(Name, MindAskQuston){

    //     console.log ("What s' Can Midn" + Name  +MindAskQuston);
        
    //     };
        
    //     setTimeout(AskQustion,5000 ," Azimul ","?")// 



    // akhon ami jodi chi user 5 mintut age singup kore bose ace tho tokhon take ki magges ta patabo 




    // amar function ar argument ar betor consol
    //  a jayta pritnt korta chacce frist parint out ar nam debo tar
    //   por  + sing kore  argument a  name debo 






    // ay conde ta korta amar khube valo laglo bapar ta hoybce aykane ami 
    // jodi chi user ka frist ar agir 2 secend age user ka akta massge
    //  patabo patate parbo 

//     function  New (Secend,Markqustion){

//     console.log ( "Hello world how are you" + Secend +  Markqustion);


//     };

//    let TIMESET = setTimeout(New,5000," Azimul ","?")

//    setTimeout(()=>{
 
    // console.log ("Celar Time Out")  akhon ami jodi chi 2 secend por Sing up delede kore debo seta o aybebe parbo
    // console.log (TIMESET),TIMESET SEta ar asbe nha 2 sende por e ayta delete hoye jabe 

 

//    },2000)// ami ayta 2 secend ar moddo disply korlam 





// akhon ami jodi chi 2 secend por por kono kicu alert korbe tahole ami ayta korta pari 



//  function Alet(){

//   alert("Hello World")

//  }

// setInterval(Alet,2000) // ami jodi chi ayta 2 secend por por ayta alert korbe ayta o parbo

// aytake bole setInterval jotokhon nha relod hocce totokhon ayta choltai tahke 




// ami jodi function kono kicu add korta chi thole ki baeb kaj korba tar examop deya HTMLCollection


// function AddKora(Name){

// console.log("How Are You" + Name)

// }

// setTimeout(AddKora, 5000, " Azimul")// alhamdulla add korta parce 




// function T( i = 0){


//     i ++;
//  console.log (i)

// }

// let x = setInterval(T,5000)


// ayta ay babe o kora jay prtibar 1 hobe 


// frist x suro hoica 0 tahke tarpor tar function ar betor  name ka x deya sin korce
 
// name 1 thek stard hobe x ta time ar beto ayta coltei thkbe

//  let x =0

// function Sky( Name){
 
//    x = Name + x;

//   alert(x)

// }

// setInterval(Sky,2000,1)



// let x =0

// function Sky( Name){
 
//    x = Name + x;

//  console.log(x)

//   if(x==3){
   
//  clearInterval(c) // clear Interval  ar kaj hicce neddesto kono time ar moddo astapito thaka

//   }

// }

//  let c = setInterval(Sky,2000,1)





// ami jode gori sturd korta chi thoel


// let Clcok = new Date();

// let Hours = Clcok.getHours();
// let Minute = Clcok.getMinutes();
// let Secend = Clcok.getSeconds();

// let TimeVew =`${Hours}:${Minute}:${Secend}`;

// console.log(TimeVew);// akhon ami refresh detace amar time ta asce 



//akhon ami jodi chi time ta atomactic asbe thole amke jyta  korta hobe 



setInterval(() => {
    

    let Clcok = new Date();

    let Hours = Clcok.getHours();
    let Minute = Clcok.getMinutes();
    let Secend = Clcok.getSeconds();
    
    let TimeVew =`${Hours}:${Minute}:${Secend}`;
    
    document.body.innerHTML =TimeVew

}, 1000);