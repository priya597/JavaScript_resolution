// const cart = ['shoes','top','lipstick','kurta'];

// createOrder(cart);
//call,bind,apply methods and uses

let names = {
    firstname : "Priya",
    lastname :  "Gupta",
    printFullName1 : function() {
        console.log(this.firstname+" "+this.lastname)
    }
}
// names.printFullName1();

names.printFullName1.call(names);
let printFullName = function(hometown, state) {
    console.log(this.firstname+" "+this.lastname+" reside at "+hometown+" , "+state)
}

printFullName.call(names, "Mumbai", "Maharastra");


let names2 = {
    firstname: "Lee",
    lastname : "min ho",
}

printFullName.call(names2,'New York', "USA"); // it calls direclty

//diffrence between call() and apply is it take second arrgument as a list
printFullName.apply(names2, ['New York DC', "USA"])

let printmyName = printFullName.bind(names2,'washington DS ', "USA");
console.log("printmyName", printmyName);
printmyName();
// names.printFullName.call(names2);