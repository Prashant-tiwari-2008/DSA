// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

const gain = [-5, 1, 5, 0, -7]; //1
const gain1 = [-4, -3, -2, -1, 4, 3, 2] //0

// my solutin and chatGpt is same
var largestAltitude = (gain) => {
    let max = 0;
    let currentMax = 0;
    for (let i = 0; i < gain.length; i++) {
        currentMax += gain[i];
        max = Math.max(max, currentMax)
    }
    return max;
}

console.log(largestAltitude(gain))
console.log(largestAltitude(gain1))