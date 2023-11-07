// Find a peak element which is not smaller than its neighbours

function myFunction(){
    let final_val = 0 
    for(let i = 1; i < n.length - 1; i++){
        if(n[i] >= n[i-1] && n[i] >= n[i+1] ){
            final_val = n[i]
        }     
    }
    return final_val;
}
const arr2 =  [ 1, 3, 20, 4, 1, 0 ] 

console.log(myFunction(arr2))