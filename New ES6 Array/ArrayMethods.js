// function fn(a, b, ...are) {
//   console.log(typeof are);
//   console.log(are);
// }
//
// fn(1, 2, 3, "a", "B", "C");
//
// const listOfNumber = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   9,
//   5,
//   "Azimuthal Islam",
//   "hello world",
//   "javaScript",
// ];
//
// console.log(listOfNumber[6]);
// console.log(listOfNumber[9 - 1]);
//
// listOfNumber.push("Array Push javaScript");
// listOfNumber.pop();
//
// console.log(listOfNumber);
//
// let day1 = {
//   squirrel: false,
//   events: ["work", "touched tree", "pizza", "running"],
// };
//
// day1.work = false;
//
// console.log(day1.work);
//
// console.log(day1.squirrel);
//
// let scores = new Array(10, "A", "B", "JavaScript", 10);
//
// console.log(scores);
//
// let colors = ["red", "green", "blue", "blck", "drag", "write"];
//
// console.log(colors[0]);
// console.log(colors[1]);
//
// colors[1] = "yellow";
//
// console.log(colors);
//
// console.log(colors.length);
//
// // Adding an element to the beginning of an array
//
// colors.unshift("write");
//
// console.log(colors);
//
// // Removing an element from the end of an array
// const removeElement = colors.pop();
// console.log(colors, "Removing");
// console.log(removeElement);
//
// let seas = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
//
// const shift = seas.shift();
//
// console.log(shift, "shift");
//
//
// const arrr = ['a', 'b']
//
// console.log(arrr[0])
//
// console.log(day1.events[0])
//
// const tokens = {
//     "token": [
//         "123",
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNhZGlrSG9zZWVuIiwiZW1haWwiOiJhemltdWxpc2xhbTAxN0BnbWFpbC5jb20iLCJpYXQiOjE3MDQzMzkzMjYsImV4cCI6MTcwNDQyNTcyNn0.zwgNk_TcOGGu4lQ3BGIRzwPSg_yMxWBeyI-x_fM64Kc"
//     ]
// }
//
// const {token } =tokens
//
// console.log(token[1].split('.'))
//
//
// const data =  {
//   "error": {
//       "username": [
//           "A user with that username already exists."
//       ]
//   }
// }
//
// console.log(data.error.username[0])
//
//
//
// const options = ['Option 1', 'Option 2', 'Option 3'];
//
//
//  const p = options.filter( item => item !== 'Option 1')
//
// console.log(p, 'p')



//
// example dir path
//     file_field = models.FileField(upload_to='G:\\upload media')

// let yourDate = new Date()
// yourDate.toISOString().split('T')[0]
//
//
// console.log(yourDate)
//
//
//
//
//
//
// const offset = yourDate.getTimezoneOffset()
// yourDate = new Date(yourDate.getTime() - (offset*60*1000))
//
// console.log((offset,'offset'))


// const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");
//
// function myCallback(a, b) {
//   // Your code here
//   // Parameters are purely optional.
//   console.log(a);
//   console.log(b);
// }
//
// console.log(intervalID,'intervalId')



const getCurrentEpochTime = () =>{

    return Math.floor( new Date().getTime() / 1000);

}


console.log(getCurrentEpochTime());



const BACKEND_ACCESS_TOKEN_LIFETIME = 45 * 60; // 45 minutes
const BACKEND_REFRESH_TOKEN_LIFETIME = 6 * 24 * 60 * 60;


console.log( BACKEND_REFRESH_TOKEN_LIFETIME , 'BACKEND_REFRESH_TOKEN_LIFETIME' );
console.log( BACKEND_ACCESS_TOKEN_LIFETIME, 'BACKEND_ACCESS_TOKEN_LIFETIME' );






const SIGN_IN_HANDLERS = {
      credentials: async  ( user, account, profile, email, credentials )=>{
          return true;
      },
      google: async(user, account, profile, email, credentials)=>{

          try{
              const response = await fetch('http://localhost:8080',{
                  method: 'POST',
                  headers:{
                      'Accept': 'application/json',
                  },
                  body: JSON.stringify({ provider: 'facebook', access_token: account["access_token"]})
              })
              const data = await response.json()
              console.log(data)
          }catch (error){
                console.log(error)
          }
      }

}


const SIGN_IN_PROVIDERS = Object.keys(SIGN_IN_HANDLERS)
console.log(SIGN_IN_HANDLERS, 'SIGN_IN_HANDLERS')
console.log(SIGN_IN_PROVIDERS,'SIGN_IN_PROVIDERS')


const authOption = {

    callbacks :{

        async sigIn ({user, account, profile, email, credentials  }){

            if ( !SIGN_IN_PROVIDERS.includes(account.provider)) return false

            return SIGN_IN_HANDLERS[account.provider] (user, account, profile, email, credentials);


        }
    }

}

const a = false

const b = 'boolean'

const c = a&& b

console.log(c)







function userInput (callbacks){
    const user = 'John Doe'
   return   callbacks(user);
}
function  getUser ( user){

    console.log('Hello',user)

}



userInput(getUser)


const url = ('alhost3000/order')

console.log(url)

  const validateURL = (value) => {
    try {
      new URL(value);
      console.log(value)
      return true;
    } catch {
        console.log('false')
      return false;
    }
  };


console.log(validateURL(url))

const x = false


const  y = true

const result = x && y

console.log(result, 'result')



  const levelPrice = [
    {
      Simple: {
        ClippingPath: 0.29,
        BackgroundRemoval: 0.29,
        MultiClippingPath: 2.0,
        ShadowMaking: 0.3,
        ImageMasking: 0.6,
        PhotoRetouching: 0.6,
        GhostMannequin: 0.6,
        ColorCorrection: 0.99,
        ECommercePhotoEditing: 1.0,
      },

      Medium: {
        ClippingPath: 1.49,
        BackgroundRemoval: 1.49,
        MultiClippingPath: 4.0,
        ShadowMaking: 0.5,
        ImageMasking: 1.2,
        PhotoRetouching: 1.99,
        GhostMannequin: 0.99,
        ColorCorrection: 1.99,
        ECommercePhotoEditing: 2.0,
      },

      Complex: {
        ClippingPath: 7.0,
        BackgroundRemoval: 7.0,
        MultiClippingPath: 10.0,
        ShadowMaking: 0.7,
        ImageMasking: 2.5,
        PhotoRetouching: 3.99,
        GhostMannequin: 1.5,
        ColorCorrection: 2.5,
        ECommercePhotoEditing: 3.0,
      },
    },
  ];


console.log(levelPrice[0]['Simple']['ClippingPath']+7);

