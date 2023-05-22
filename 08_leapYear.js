function checkLeapYear(LeapYear) {
    if (LeapYear== null || LeapYear==undefined || LeapYear=="Twenty Twenty" ||LeapYear== "NaN") {
        console.log(`"${LeapYear}": is not vaild input`);
        } else {
        if (LeapYear % 4 ==0) {
            console.log(`"${LeapYear}": year is Leap Year`);
            
        } else {
            console.log(`"${LeapYear}": year is Not Leap Year`);
            
        }
    }
    
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);