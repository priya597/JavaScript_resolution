//max and min value


let array = [21,3,2,0,6,5,-3]
let max = 0;
let min = 0;
console.log(max , " min ", min );
for(let i = 0; i < array.length; i++){
    console.log(array[i])
    if(array[i] > max){
        max = array[i]
    }else{
        min = array[i]
    }
}

console.log(max , " min ", min );