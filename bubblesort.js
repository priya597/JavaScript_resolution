function BubbleSort(arr){
    do { 
        isswap = true
        for (let i = 0; i < arr.length - 1;i++ ){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                isswap = false
            }
        }
    } while(!isswap)
}
  
let arr = [8, 20, -2, 4, -6, 0, -1.5]
BubbleSort(arr)
console.log(arr)

