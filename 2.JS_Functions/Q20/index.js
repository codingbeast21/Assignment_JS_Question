function randomChar(length){
   const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   let result="";

   for(let i=0;i<length;i++){
    let randomIndex= Math.floor(Math.random()*characters.length);
    result+=characters[randomIndex];
   }
   return result;
}

console.log(randomChar(9));