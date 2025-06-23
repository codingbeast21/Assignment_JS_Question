function amountToCoins(amount, coins){
    const coin=[];
    coins.sort((a, b) => b - a);
    for(let i=0;i<coins.length;i++){
        while(coins[i]<=amount){
           amount=amount-coins[i];
           coin.push(coins[i]);
        }
    }
    return coin;
}


console.log(amountToCoins(46, [25, 10, 5, 2, 1]));