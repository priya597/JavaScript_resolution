function secondLargest(arr){
    if(arr.length < 2){
        return undefined;
    }
    let largest = arr[0]
    let secondLargest = arr[1]

    if (largest < secondLargest) {
        [largest, secondLargest] = [secondLargest, largest];
    }

    for(let i = 2 ; i<arr.length; i++){
        console.log(i, arr[i], largest)
        if(arr[i] > largest){
            secondLargest = largest
            largest = arr[i]
        }else if(arr[i] > secondLargest && arr[i] !== largest){
            console.log(" secondLargest ", arr[i], secondLargest)
            secondLargest = arr[i]
        }
    }
    return secondLargest
}


const arr = [5, 2, 9, 1, 7, 10, 8];//[2,4,0,1,-3,-2.9,4,7,9,6.6];
const result = secondLargest(arr)
console.log(" result ", result)