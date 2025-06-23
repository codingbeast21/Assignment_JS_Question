function isArmstrong(num){
    let sum=0;
    let temp=num;

    while(temp>0){
        let digit=temp%10;
        sum+=digit*digit*digit;
        temp=Math.floor(temp/10);
    }
    return sum===num;
}

for(let i=100;i<=999;i++){
    if(isArmstrong(i)){
       console.log(i);
    }
}