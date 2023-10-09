function multiplicationOfNumber(number){
    let result=1;
    for(let i=1;i<=number;i++){
        result=result*i;
    }
    return result;
}
const result=multiplicationOfNumber(7);
console.log(result);