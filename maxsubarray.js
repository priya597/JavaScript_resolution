var maxSubArray = function(nums) {
    let maxsub = nums[0]
    let newbag = 0
    for(i = 0; i<nums.length; i++){
        newbag += nums[i];
         if(newbag > maxsub){
            maxsub = newbag
        }
        if(newbag < 0){
            newbag = 0
        }
    }
    return maxsub
};

return maxSubArray([-2,1,-3,4,-1,2,1,-5,4])