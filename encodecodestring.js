// // ***********************************************************************
// // Given a string, encode it as follows.
// // ● Ever character is replaced by itself and the number of times its repeats its self at
// // the location.
// // ● Example #1 aaabbcccdde - a3b2c3d2e1
// // ● Example #2 aaabbcccddaabb - a3b2c3d2a2b2
// // ● Bonus - decode the encoded string to its original
// // ○ Example #1 (a1b5g3 - abbbbbggg)
// // ○ Example #2 (aaaaaaaaaabbbbcccccccccccc - a11b3c12)

function encodeInput(args){
    let encodedStr = '';
    let count = 1;
    //logic explained : 
    // step1 : two param have declare 
    // step1:  one for count the no of occurrance in first sequance
    // step2:  second for print that string
    // step3. will iterate the give string length no of time
    // step4: will check if current element equal to the next element then will increment the count
    // step5: or else will join count and current elment and appened to encodedStr
   
    for(let i = 0; i < args.length; i++){
        if (args[i] === args[i+1]){
          count++;
        }else{
          encodedStr += args[i] + count;
          count = 1;
        }
    }
    return encodedStr;
}
 
let newstr = "aaabbcccddaabb";  // "aaabbcccdde";
let encodeData = encodeInput(newstr);
console.log("initial input =>", newstr, " Encoded =>", encodeData);

function decodeInput(args){
    let decodedStr = '';
    //logic explained : 
    // step1 : 1 param have declare print final string
    // step3. will iterate the give string length no of time
    // step4: will check if current element is number of not
    // step5: if its a number create new empty array define length to array then add element no time and convert araay to string append to decodedStr variable
   
    for(let i = 0; i < args.length; i++){
        if (!isNaN(parseInt(args[i]))){
            let repeat = [];
            repeat.length = parseInt(args[i]) + 1;
            decodedStr += repeat.join(args[i-1]);
        }
    }
    return decodedStr;
}
 
console.log("initial encoded =>", encodeData,  " decoded =>", decodeInput(encodeData));

