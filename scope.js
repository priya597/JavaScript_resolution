
{
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log("a ",a)
// console.log("b ",b)
console.log("c ",c)


function compare(){
    arr1.sort();
    arr2.sort();

    key = 0
    if(arr1.length !== arr2.length)
        return false;

    
    // while(arr1.length > key){
    //     console.log(arr1[key] +" = "+ key+ " and " + arr2[key] +" = " +key);
    //     if(arr1[key] !== arr2[key]){
    //         return false
    //     }
    //     key++;
    // }

    if( JSON.stringify(arr1) != JSON.stringify(arr2)){
        return false
    }

    return true
}


const arr1 = [1, 3, 6, 5]; //[5,6,3,1];
const arr2 =  [1, 5, 4, 3]


console.log(compare(arr1,arr2))