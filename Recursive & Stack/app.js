// = ayta bolte bojay sob kicur mul  console jake deya sing kora hobe sei top paytuti pabe



// let total = 0;


// for (let index = 0; index <=3; index++) {

//     total = index + 1;

//     console.log(total)

// }





// Onnobabe korar system



// let total = 0;


// for (let index = 0; index <=3; index++) {


//     // total+= index

//     total = total+ index


// }

// console.log(total)





// when a function  calls itself jkhon kono akta function ar betorei kaj kore thake take Recutsive function bole


// loop ar kaj ta jodi ami function ar betor take korta tho seta recursive babe ki babe korta pari tar exampol


//  const PrintTent = function () {

// console.log("This Is a recrsive")
//  PrintTent()

//  }







// function recursive & Stack 


// const PrintTent = function (Number) {

//     if(Number ===0){



//     console.log( "Ami kaj kortace");

//        return


//     };

//   // function ar betor takei kaj kortace 

//   console.log( "Function is The Body")

// };


// PrintTent(0)



// 2 mathod

// const PrintTent = function (Number) {

//     if(Number ===0){



//     console.log( "Ami kaj kortace");

//        return


//     };



//   console.log(Number)

// };


// PrintTent(1)
// PrintTent(2)
// PrintTent(3)
// PrintTent(4)
// PrintTent(5)



// akhon aygula ami jodi function ar betor thke korate chi thole tar exampol dai


// const PrintTent = function (Number) {

//     if(Number ===0){



//     console.log( "Ami kaj kortace");

//        return


//     };



//   console.log(Number)

//   PrintTent(Number - 1)


// };


// PrintTent(5)




// akhon ami jodi abr fol lup ta dekhi thole ki bujta pari tar exampol


// let Total = 0;

// for (let index = 0; index <=3; index++) {


// Total = index + 1;

// Total += index


// Total = Total + index;


// }

// console.log(Total)

// function sumRang(num, total = 0){

// if(num===0){

//     return "The Number is a "+ total

// }

// return sumRang(num-1, num + total)



// }

// console.log(sumRang(5))





const family = {


    Name: "Azimul",
    Childen: [


        {
            Name: "Byke",
            Childen: [],


        },

        {
            Name: "Komola",
            Childen: [

                {
                    Name: "Janny Juhri 1 ",
                    Childen: []
                },
                {
                    Name: "Janny Kuddos 2 ",
                    Childen: []
                },
            ],
        },
    ],


};


function PrintChilden(deta) {

    if (deta.Childen.length <= 0) {

        return;
    }

    deta.Childen.forEach((Child) => {

        console.log(Child.Name);

        PrintChilden(Child);

    })

}
PrintChilden(family);