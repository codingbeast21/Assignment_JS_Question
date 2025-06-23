function rightTriangle(num){
   
    for(let i=1;i<=num;i++){
         let line='';
        for(let j=1;j<=i;j++){
           line+='*';    
        }
        console.log(line);
    }
}

console.log(rightTriangle(5));