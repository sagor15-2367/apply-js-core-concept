// //even number
// console.log(4/2);
// console.log(10/2);
// console.log(100/2);
// console.log(144/2);

// //odd number
// console.log(5/2);
// console.log(45/2);
// console.log(47/2);
// console.log(49/2);
// console.log(423/2);

// //vag shes
// console.log(5%2);
// console.log(45%2);
// console.log(47%2);
// console.log(49%2);
// console.log(423%2);


function isEven(number){
    const remainder=number%2;
    // console.log(remainder);
    if(remainder===0){
        // console.log('number is even');
        return true;
    }
    else{
        // console.log('number is odd');
        return false;
    }
}
const myNumber = isEven(222);
console.log(myNumber);