class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
     hasDuplicate(nums) {
        console.log(nums);
        for(let index=0;index<nums.length;index++){
            // console.log(nums[index]);
            let num2check = nums[index];
            for(let j=1;j<nums.length;j++){
                if(index == j){

                }
                else{
                    console.log("reached1",num2check,nums[j]);
                if(num2check==nums[j]){
                    console.log("reached");
                    return true;
                }   
                }         
            }
        }
        return false;
    }
}
