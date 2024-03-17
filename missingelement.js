// How to Find missing elements in a given Array 1 to 10
let missing = []
arr = [1, 2, 3, 4, 5, 6, 7,  9, 10];
for(let i = 1;i <= arr.length;i++){
    console.log(i)
    if(!arr.includes(i)){
       missing.push(i)
    }
}

const givenArray = [1, 2, 3,  5, 6, 7, 8, 9, 10];

// Create an array to store missing elements
const missingElements = [];

// Iterate through numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  // Check if the current number is in the given array
  if (!givenArray.includes(i)) {
    // If not, add it to the missing elements array
    missingElements.push(i);
  }
}

// Print or use the missing elements
console.log("Missing elements:", missingElements);

console.log(missing)