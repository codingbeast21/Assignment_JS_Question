for(let year=2014; year<= 2050;year++){
    const date= new Date(year, 0, 1);
    if(date.getDay()==0){
        console.log(`1st January is a Sunday in the year ${year}`);
    }
}