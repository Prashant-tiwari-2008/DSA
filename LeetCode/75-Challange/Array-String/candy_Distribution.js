// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
// Note that multiple kids can have the greatest number of candies.

const candies = [2,3,5,1,3]
const extraCandies = 3; // [true,true,true,false,true]


var kidsWithCandies = function(candies, extraCandies) {
    let greatest = 0;
    let result = [];
    for(let candie of candies){
        if(greatest < candie){
            greatest = candie
        }
    }
    for(let candie of candies){
        result.push((candie + extraCandies) >= greatest ? true : false )
    }
    return result;
};

console.log(kidsWithCandies(candies,extraCandies));


//best
var kidsWithCandies = function(candies, extraCandies) {
    const len = candies.length;
    const max = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= max);
    // var res = Array(len);
    // for (var i = 0; i < len; i++) {
    //     res[i] = candies[i] + extraCandies >= max;
    // }
    // return res;
};