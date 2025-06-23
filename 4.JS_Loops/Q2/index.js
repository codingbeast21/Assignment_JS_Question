function sign(a, b, c){
    let result=a*b*c;

    if(result>=0){
        return '+';
    }
    else{
        return "-";
    }
}

console.log(sign(3, -4, 5));