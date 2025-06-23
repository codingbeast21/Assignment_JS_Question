function larger(a, b){
    if(a===b){
        return "all are equal";
    }
    else if(a>b){
        return a;
    }
    else{
        return b;
    }
}

console.log(larger(3,6));