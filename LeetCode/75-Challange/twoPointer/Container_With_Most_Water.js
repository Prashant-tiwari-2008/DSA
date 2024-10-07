console.log("Container With Most Water");

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.


const height = [1, 8, 6, 2, 5, 4, 8, 3, 7] // 49
const height1 = [1, 1] // 1
const height2 = [8,7,2,1] // 7

const most_Water = (array) => {
    let left = 0
    debugger
    let right = array.length - 1;
    let maxWater = 0
    while (left < right) {
        let currentWater = Math.min(array[left], array[right]) * (right - left);
        if (currentWater >= maxWater) maxWater = currentWater
        array[right] >= array[left] ? left++ : right--
    }
    return maxWater
}

// console.log(most_Water(height))
// console.log(most_Water(height1))
console.log(most_Water(height2))


// old solution 
var maxArea_old = function(height) {
    let left = 0;
    let right = (height.length - 1);
    let result = 0;
    while( left < right){
        let temp = Math.min(height[left],height[right]) * (right - left)
        if(temp > result){
            result = temp;
        }
        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }
    return result
};