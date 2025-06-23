function remainDaysInCrismas(){
    const today= new Date();
    const currentYear= today.getFullYear();
    
    let chrismas= new Date(currentYear, 11, 25);
    if(today>chrismas){
        chrismas= new Date(currentYear + 1, 11, 25);
    }
    
    const oneDay = 24*60*60*1000;
    
    const remain= Math.ceil((chrismas-today)/oneDay);
    return remain;
}

console.log(`Days left until next Christmas: ${remainDaysInCrismas()}`);