function genCombination(str){
    let res = [];

    for(let i=0;i<str.length;i++){
        let comb='';
        for(let j=i;j<str.length;j++){
            comb+=str[j];
            res.push(comb);
        }
    }
    return res;
}


console.log(genCombination("dog"));