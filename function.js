/*function output(){
    console.log("knowledge stream");
}
output();*/

// parametric function

function sum(a,b){
    return a+b;
}
console .log(sum(2,3));

// function expression

const evenodd= function (p1,p2) {
    if(p1%p2==0){
        console.log("both are even");
    }
    else{
        console.log("both are different number");
    }
}
evenodd(1,2);
// another exzmple 

function addnumbers(param1,param2){
    let result=param1+param2;
    return result;
    // return k badd in javascript koi bhi code execute nai hoga

}
console.log(addnumbers(3,5));
// if we assign the function as a value to some veriable then it will be function
// expression like....

const result= addnumbers(4,5);
console.log("result :", result);

// Arrow function

const x=(y,z)=>{
    return y*z;
}
console.log(x(5,2));





