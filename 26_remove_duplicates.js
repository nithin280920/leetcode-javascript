const removeDuplicates = (nums) => {
    if(nums.length === 0) return 0;
    let j = 1;

    for(i = 1; i<nums.length; i++){
        if(nums[i] !== nums[i-1]){
            nums[j] = nums[i]
            j++;
        }
    }
    return j
};

const arr = [1,1,1,2,3,3,3,3,3,3,3]
const k = removeDuplicates(arr);
console.log(arr.slice(0, k));
