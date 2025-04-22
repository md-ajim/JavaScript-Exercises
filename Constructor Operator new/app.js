
const user = {

Name:"Azimul",
ID:1,
Address:"Dhaka",
Age:23,

}
//Upor tar tahke neca akta constructor toiri korce 
//User argument () ar betor akta call korar sojug kore deyaca 
// This ar betor valou gulay akta propaty toiri kore deca 
// tar por se hupor ar user ka dore falce seta naya asce 
// tar consol a New User lekha akta constrctor toiri korce argumnt ar betor a

// function User(Name,ID,Address,Age){

// this.Name = Name;
// this.ID= ID;    
// this.Address= Address;
// this.Age= Age;

// };

// console.log ( user)
// console.log (new User("Azimul",1,"Dhaka",23));

// let User1 = new User("Siddk",2,"Jalokhate",23);
// let User2 = new User ("Aksh", 9,"Noyakhali",24);


// ami jodi variabel deya us kore

// let Phone = "PHONE"

//Constructor deya ami akta new add korlam
// User1.Phone= 101010010574414;
// User2[Phone]= 017426352411741;

// console.log (User1);
// console.log (User2);



function User(Name , Selary, Boyos, Age){


 if(!new.target){

 return new User (Name,Selary,Boyos,Age)


 }

this.Name =Name;
this.Selary=Selary;
this.Boyos=Boyos;
this.Age=Age;

}


console.log( User("Azimul",20,24,"wwww"));