const obj = { };
obj.name = obj;

// ⛔️ TypeError: Converting circular structure to JSON
console.log(JSON.stringify(obj));

// -------------------------------------------------

const arr = [{}];
arr[0].arr = arr;

// ⛔️ TypeError: Converting circular structure to JSON
JSON.stringify(arr);
