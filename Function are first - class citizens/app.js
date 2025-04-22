function add ( a , b){
    return a + b
}

let sum = add
let  result = add(10, 20)
let result2 = sum(10,50)
console.log(result2)

function average(a,b,f){

    return f(a,b)/2
}

const result3 = average(10,20,sum)

console.log(result3)

let x = 20

console.log(x = 10)



function compareBy(propName){
    console.log(propName)

    return function(obj1 , obj2,obj3 ){
        console.log(obj1,'obj1')
        console.log(obj1,'obj2')

        let value1 = obj1[propName],
        value2 = obj2[propName];
        const value3 = obj3[propName];

        if (value1> value2){
            console.log(value1,'value1')
            return 1;
           
        }
        else if (value1 < value2){
            console.log(value2,'value2')
            return -1;

        }

        else {
            console.log(value3,'value3')
            return -2;

        }

      

        
    }
}


let product = [
    {name:'Laptop',price: 10000},
    {name:'Samsung Galaxy',price: 50000},
    {name:'Apple',price: 100000},
]


let result4 = compareBy('price')
console.log(result4(product[0],product[1],product[2]))

// console.log(product[2] , console.log('product') )

// product.sort(compareBy('price'))

console.table(product)
// console.table(product.sort(compareBy('name')))




function cmTola( length){

    return length /2

}


function IntoCm( length){
    return length *2
}



function convert( fun, length){

     return fun(length)


}


let result5 = convert(cmTola,10)

let result6 = convert(IntoCm,10)


console.log(result5)
console.log(result6)