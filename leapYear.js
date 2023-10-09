function leapYear(year){
    const remainder=year%4;
    if(remainder===0){
        console.log('Your year is leap year',year);
    }
    else{
        console.log('Your year is not a leap Year',year);
    }
}
leapYear(1952);
leapYear(1993);
