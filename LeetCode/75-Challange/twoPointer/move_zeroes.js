console.log("move Zeroes");

const nums = [0, 1, 0, 3, 12];
const nums1 = [0];
[5,3,0,4,0,5,2]

// not optimize solution  => o(n^2)
const moveZeroes = (nums) => {
    let j = nums.length - 1;
    let i = 0;
    while (i <= j) {  // o(n)
        if(nums[i] === 0){
            nums[nums.length] = nums[i];
            nums.splice(i,1) // o(n)
            j--;
        }
        i++;
    }
    return nums
}

console.log(moveZeroes(nums))
console.log(moveZeroes(nums1))

//Optimize solution
const moveZeroes_chatGpt = (nums) => {
    let nonZeroIndex = 0;

    // Move non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }

    // Fill the remaining positions with zeros
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};
4

// best solution
var moveZeroes_Best = function(nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            [nums[k], nums[i]] = [nums[i], nums[k]];
            k++;
        }
    }
};