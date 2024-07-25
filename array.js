// basic array

const array=[1,2,3,4,5,"qamar"];
console.log(array);

// array methods
// push method
// simply add the value at the last of the array

const array1=[1,2,3,4,5,"qamar"];
array1.push("ali",9);
console.log(array1);

// pop method
// simply delete kr deta he value array k last se
// is ki parenthesis main kuch bhi nahi likhte
array1.pop();
console.log(array1);

// unshift method
// array k start main value add kr deta he

array1.unshift("knowledge stream", 2024);
console.log(array1);

// shift method
// simply array k start se value delete kr deta he
// its like a pop is k bhi parenthesis main kuch nai likhte

array1.shift();
console.log(array1);

// include method
// it tells us k koi value hmari array main exist krti he k nai
// output boolean main hoti

console.log(array1.includes(100));

// index of 
// tells us k knsay index pe knsi value he


console.log(array1.indexOf(5));
