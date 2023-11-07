let name = {
    FirstName : "Priya",
    LastName : "Gupta"
}

let printName = function(){
    console.log(this.FirstName+" "+ this.LastName);
}
 
// let printMyName = printName.bind(name)
// printMyName();
//****************************************
Function.prototype.mybind = function(...args){
    let obj = this
    return function(){
        obj.call(args[0]);
    }
}

let printMyBind2 = printName.mybind(name)
printMyBind2();