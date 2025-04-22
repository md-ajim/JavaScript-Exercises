
const socials =[
    {
        "id": 1,
        "Name": "Jon",
        "Class": 10,
        "Roll": 20,
        "Address": "UK"
    },
    {
        "id": 1,
        "Name": "Mitu",
        "Class": 10,
        "Roll": 10,
        "Address": "Nepal"
    },
    {
        "id": 3,
        "Name": "Rakib",
        "Class": 10,
        "Roll": 10,
        "Address": "Gaja"
    },

    {
        "id": 4,
        "Name": "Jon",
        "Class": 10,
        "Roll": 20,
        "Address": "UK"
    },
]

const a = socials.map(item =>{
    if(item.length >=5){
        return item
    }

    else {
        return console.log('Not Found')
    }
})



const x = socials.filter((item)=>{
    return item.Name[0]==='J'
}
)

console.log(x.map(item=>item.Name))
console.log(x)
console.log(socials.length)

const map1 = new Map();
const inventory = [
    { name: 'asparagus', type: 'vegetables', quantity: 9 },
    { name: 'bananas', type: 'fruit', quantity: 5 },
    { name: 'goat', type: 'meat', quantity: 23 },
    { name: 'cherries', type: 'fruit', quantity: 12 },
    { name: 'fish', type: 'meat', quantity: 22 },
  ];
  
  const restock = { restock: true };
  const sufficient = { restock: false };
  const result = Map.groupBy(inventory, ({ quantity }) => (quantity < quantity.length-1 ? restock : sufficient));
  console.log(result.get(restock));
  // [{ name: "bananas", type: "fruit", quantity: 5 }]
  

  console.log()