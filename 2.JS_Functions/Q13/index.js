function getFactors(number){
    const factors=[];
    if(number<=0) return "please enter positive value";

    for(let i=1;i<=number;i++){
        if(number%i===0){
            factors.push(i);
        }
    }
    return factors;
}

console.log(getFactors(12));