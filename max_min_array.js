//max and min value


let array = [21,3,2,0,6,5,-3, -4.3]
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

const numbers = [5, 2, 9, 1, 7];

// Find the maximum value
const maxValue = Math.max(...numbers);

// Find the minimum value
const minValue = Math.min(...numbers);

console.log("Maximum value:", maxValue);
console.log("Minimum value:", minValue);