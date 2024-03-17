function findOddNumbers(arr) {
    let response = {}
    response['even'] = [];
    response['odd'] = []
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2 == 0){
            response['even'].push(arr[i])
        }else if(arr[i]%2 !== 0) {
            response['odd'].push(arr[i])
        }
    }
    return response
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = findOddNumbers(numbers);

console.log("Odd numbers:", oddNumbers);
