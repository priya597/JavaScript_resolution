var productExceptSelf = function(nums) {
  
    const result = [];
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = product
        product *= nums[i]
    }

    product = 1
    for (let j = nums.length-1; j >= 0; j--) {
        result[j] *= product
        product *= nums[j]
    }
    return result;
};

productExceptSelf([1,2,3,4,5,6,7])