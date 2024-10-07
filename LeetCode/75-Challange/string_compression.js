console.log("string compresstion");

const chars = ["a", "a", "b", "b", "c", "c", "c"];// a2b2c2
const chars1 = ["a"] // a
const chars2 = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"] //ab12

// right solution but not accepted by leetcode
const compress = (nums) => {
    let count = 1;
    let i = 0;
    let position = 0;
    while (i < nums.length) {
        if (nums[i] === nums[i + 1]) {
            count++;
            i++;
        } else {
            nums[position] = (nums[i]);
            position++;
            if (count > 1) {
                const stringDigits = String(count);
                for (let digit of stringDigits) {
                    nums[position] = digit;
                    position++;
                }
            }
            i++;
            count = 1
        }
    }
    return position
}

console.log(compress(chars))
console.log(compress(chars1))
console.log(compress(chars2))

// chatgpt solution
const compress_chatgpt = (chars) => {
    let index = 0;  // Pointer to write in the array
    let i = 0;  // Pointer to iterate through the array

    while (i < chars.length) {
        let j = i;

        // Count the consecutive characters
        while (j < chars.length && chars[j] === chars[i]) {
            j++;
        }

        // Write the character
        chars[index] = chars[i];
        index++;

        // Write the count if it's greater than 1
        let count = j - i;
        if (count > 1) {
            const countStr = String(count);
            for (let char of countStr) {
                chars[index] = char;
                index++;
            }
        }

        // Move to the next distinct character
        i = j;
    }

    return index;  // Return the length of the compressed array
};


// best solution - in java
// class Solution {
//     public int compress(char[] chars) {
//         int n = chars.length;
//         int i = 0;
//         int idx = 0;
//         while (i < n) {
//             int temp = 1;
//             char ch = chars[i];
//             while (i + temp < n && chars[i + temp] == ch) temp++;
//             if (temp == 1) chars[idx++] = ch;
//             else {
//                 chars[idx++] = ch;
//                 String count = temp + "";
//                 for (char c : count.toCharArray())
//                     chars[idx++] = c;
//             }
//             i += temp;
//         }
//         return idx;
//     }
// }
