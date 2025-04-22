// let User =[ 

//  "Azimul",
//  "Sadik",
//  "Jobbar",
//  "Bosir",
//  "Nobab",
//  "Monthu",
//  "Kuddos",
//  "Tarack",


// ];


// ababe user nam gula peta pari

// [U1, U2, U3, U4,U5,U6,U7,U8,] =User
// console.log(U3)



// ay babe korai shoj
// console.log(User[1]) 

// [U1,...A]=User

// console.log(A) ay khane a use korle
//  tayel ami u1 rekah baki sob gula pabo

// console.log(A[1])





// let User ={

// Id:20,
// Name:"Azimul",
// Address:"Barishal",
// Age:20,
// Pason:"Gripice Desiner",
// Emil:"azimul islam@gamil.com",

// };

// let {Id,Name,Address,Age,Pason,Emil}=User
// console.log(Id)  //JavaScript arry mathod ar ayta akata good Mathod

// let {Id,...a}=User

// console.log(a.Pason);// Moja pailam ay funstion ta dekha


// let Otha ={ Powsood:"asf2222g",
// Phone:0176352635 }

// let add = {Otha,...User}// ay dui take objicet hisabe pailam

// console.log (add);


// aybar ami jodi akta name acessc
//  korta chi thahole amake ja korta hove tar exampol

// console.log(add.Otha.Powsood); alhamdullha mai acciss korta parbo


// function ar exampol



// mojar akta barpar y ar sabnir ta arry hisabe jabe


// ay rokom system kore o arry number gula ber kora jay


// ar aro kicu bewttful system toica

// function jogkoro(x,...y){
// function jogkoro(x,y=[]){
    // function jogkoro(...y){

     function jogkoro(...y){
       
        let Total = 0; 

        y.forEach((Valou)=>{

            Total +=Valou



        })
        console.log(Total)

}

jogkoro(10,20,30,60) // derkile arry hisabe chole asce