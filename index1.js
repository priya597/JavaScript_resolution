// a = 10

// function abc(){
//     b = 10
// }

// console.log(a, window.a, this.a)
// console.log(b, window.b, this.b)


// console.log(a); // refrence error
// let a;
// console.log(a)
// const b = 100; // syntax error 
// b = 90
// console.log(a,b,c)
// var c ; //undefined
// console.log(a,c)

var a = 100
if(true){
    var a = 10
    let b = 20
    const c= 30
    console.log(a,b,c)
}
console.log(a)



function x(){
    for(let i = 1; i < 7; i++){
        setTimeout( function(){
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste Javascript")
}
x();


//function statement or function declaration
function x(){
    console.log("namashtee !!")
}

//function expression
let y = function(){
    console.log("Javascript")
}

//Anonymos function
function () {
     
}
