// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Given a date in string format (YYYY-MM-DD) you need to print out the dates of all the second Saturdays in that year until that date. If the given date is a second Saturday, you should not print it.


let newDate = '2023-11-10';
let splitDate = newDate.split("-");
let givenDate = new Date(parseInt(splitDate[0]), parseInt(splitDate[1])-1, parseInt(splitDate[2]));

let fromdate = new Date(parseInt(splitDate[0]), 0, 1);
console.log(" fromdate", fromdate.getDay());

for(let i = 0; i < parseInt(splitDate[1]); i++){
    let fromdate = new Date(parseInt(splitDate[0]), i, 1);
    let findDate = 6-fromdate.getDay()+8;
    let secondSaturday = new Date(parseInt(splitDate[0]), i, findDate)
    
    if(secondSaturday < givenDate){
        console.log(" secondSaturday ", secondSaturday);
    }
}
