// for loop

let array = [1,2,3,4,5,6,7,8,9]
// if we do not know the lenght of an array
for(let i=0; i< array.length; i++){
    console.log(array[i]);
}

// another example

let sum=0;
for(let i=1;i<10;i++){
    sum=sum+i;
}
console.log(sum);

// while loop

let i=0;
while(i<=5){
    console.log(i);
    if(i==4){
     break;
        // continue;
    }
    i++;
}