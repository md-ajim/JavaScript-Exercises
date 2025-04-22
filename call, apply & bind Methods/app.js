
// let User = {

//  FrsitName:"Azimul",
//  LastName:"Islam",

//  getFullName:function (Home,Jala ) {

//    console.log( this.FrsitName+" "+this.LastName,Home,Jala);
     
//  }

// }

// const User2 = {

//     FrsitName:"Azimul",
//     LastName:"Islam",

// };

// User.getFullName.call(User2,"Jalokhate","Barisal")  // alhamdullha ayta bar barb pratice korta hobe








// ami jodi apply khatre us kota chi thole tar exampol 


// let User = {

//     FrsitName:"Azimul",
//     LastName:"Islam",
   
//     getFullName:function (Home,Jala ) {
   
//       console.log( this.FrsitName+" "+this.LastName,Home,Jala);
        
//     }
   
//    }
   
//    const User2 = {
   
//        FrsitName:"Azimul",
//        LastName:"Islam",
   
//    };
   
//    User.getFullName.apply(User2,["Jalokhate","Barisal"]) //apply deya o ayta kota parlam
    

 
// oi babe korla code ta kharp dakay ay babe kora valo




//  amara akta function bha objcet toiri kore rakce jay mathod ka ami futufr  a us korta parbo 


// const getFullName = function (Home,Jala ) {
   
//     console.log(this.FrsitName+" "+this.LastName,Home,Jala);
      
//   };
 
//    const User = {

//     FrsitName:"Azimul",
//     LastName:"Islam",
   
//    }
   
//    const User2 = {
   
//        FrsitName:"Azimul",
//        LastName:"Islam",
   
//    };
   
//    getFullName.apply(User2,["Jalokhate","Barisal"]) // allwos ami aybabe use korbo code ta 


 

//akhon ami bain ta us korta parbo ayta akta function banira rakbo jayta chila futur ami onnno babe us korta prbo
// sokol deta gulo us kore kono kicu akta bain kore rekha deta chice seta ami futur us korta parbo 


const getFullName = function (Home,Jala ) {
   
    console.log(this.FrsitName+" "+this.LastName,Home,Jala);
      
  };
 
   const User = {

    FrsitName:"Azimul",
    LastName:"Islam",
   
   }
   
   const User2 = {
   
       FrsitName:"Azimul",
       LastName:"Islam",
   
   };
   
   getFullName.apply(User2,["Jalokhate","Barisal"])

 
   const bindValou = getFullName.bind(User2);
   
   bindValou("Jalokhate","Barisal")





// defrent deta stcer ar khate amra aygulo us korta parbo defarant valou ar khate amra ayta us korta parbo
// ay doronir Option gulo us korta parbo conde detbol hisabe toiri korta prbo profasonal lup deba amadir code gulo ta 



