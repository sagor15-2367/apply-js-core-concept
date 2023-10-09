// function getSumOfAnArray(number) {
//     let sum = 0;
//     for (let i = 0; i < number.length; i++) {
//         const index = i;
//         const element = number[index];
//         sum = sum + element;
//         // console.log(index,element,sum);
//     }
// }

function getOddNumbersOfAnArray(number){
    const oddNumbers=[];
    for (let i = 0; i < number.length; i++){
        const index = i;
        const element = number[index];
        if(element%2 !== 0){
            console.log(index,element);
            oddNumbers.push(element);
        }
       

    }
    return oddNumbers;
}


const myNumber = [12, 23, 33, 44, 32, 77, 24,91];
const oddNumbers=getOddNumbersOfAnArray(myNumber);
console.log(oddNumbers);
const oddNumberSum=getOddNumbersOfAnArray(oddNumbers);
// getOddNumbersOfAnArray(myNumber);
console.log('oddNumber of sum',oddNumberSum);
