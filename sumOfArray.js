function getSumOfAnArray(number){
    let sum=0;
    for(let i=0; i <number.length;i++){
        const index=i;
        const element=number[index];
        sum=sum+element;
        console.log(index,element,sum);
    }
}

const myNumber=[12,23,33,44,32,77,24];
getSumOfAnArray(myNumber);