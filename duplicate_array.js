//get duplicate array element

const numList = [1, 2, 3, 4, 5, 2, 6, 3, 7, 8, 8];
const finalResult = numList.filter((elem, index, arr)=>arr.indexOf(elem) != index);
console.log(finalResult);

let duplicates = []
numList.forEach(function (value, key, array) {
    console.log(duplicates.indexOf(value));
    if (array.indexOf(value, key + 1) !== -1 && duplicates.indexOf(value) === -1) {
        duplicates.push(value);
    }
})

//time - big O(N ^2)
let duplicates2 = [];
for(let i = 0; i < numList.length; i++){
    for(let j = i+1; j < numList.length-1; j++){
      
        if(numList[i] == numList[j]){
            duplicates2.push(numList[i])
        }
    }
}

console.log( " duplicates ", duplicates)

//time - big O(N) & space O(N)
function findDuplicates(arr) {
    let seen = {};
    let duplicate = [];
    for(let i = 0; i < arr.length; i++){
     
        if(seen[arr[i]] === undefined){
            seen[arr[i]] = 1
        }else{
            duplicate.push(arr[i]);
            seen[arr[i]]++
        }
    }
    return duplicate;
}

const numList_array = [1, 0, 2, 3, 4, 2, 5, 6, 3, 7, 0, 8, 8];
const result = findDuplicates(numList_array);

console.log("Duplicate elements:", result);


