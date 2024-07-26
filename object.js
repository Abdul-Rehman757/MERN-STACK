function sum(a,b){
    return a+b;
}
console .log(sum(2,3));


// object creation

const object={
    name: "ali",
    age:21,
    array:[5,2],
    sum:sum,
    city:{
        city1: "lahore",
    },

};

console.log(object);
console.log(object.array[1]);
console.log(object.sum());
console.log(object.city.city1)

// object methods
// object keyword is always started with capital "O"
console.log(Object.keys(object));
console.log(Object.values(object));
console.log(Object.entries(object));

