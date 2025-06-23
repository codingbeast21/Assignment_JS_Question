function range(a, b){
   
    if(b-a<=1){
        return [];
    }
    const rest = range(a, b - 1); 
    rest.push(b - 1);            
    return rest;
}

console.log(range(1,9));