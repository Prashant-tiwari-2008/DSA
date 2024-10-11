// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

const flowerbed = [1, 0, 0, 0, 1]
const n = 1;

const flowerbed1 = [1, 0, 0, 1]
const n1 = 2;

const flowerbed2 = [1,0,0,0,0,1];
const n2 = 2;

const canPlaceFlowers = (flowerbed, extraFlower) => {
    if(extraFlower === 0) return true;
    if (flowerbed.length === 1 && flowerbed[0] === 0) {
         extraFlower--;
         return extraFlower === 0;
     }
    for (let i = 0; i < flowerbed.length; i++) {
      if(extraFlower>0){
         if (i == 0) {
             if (flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
                 extraFlower--;
                 flowerbed[i] = 1;
             }
         }
         if (i == (flowerbed.length - 1)) {
             if (flowerbed[i] === 0 && flowerbed[i - 1] === 0) {
                 extraFlower--;
                 flowerbed[i] = 1;
             }
         }
         if (flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
             extraFlower--;
             flowerbed[i] = 1;
         }
     }
     }
     return extraFlower == 0 ? true : false
}


console.log(canPlaceFlowers(flowerbed, n));
console.log(canPlaceFlowers(flowerbed1, n1));
console.log(canPlaceFlowers(flowerbed2, n2));




// existing solution
var ExistingcanPlaceFlowers = function(flowerbed, n) {
    if(n=== 0) return true;
   if (flowerbed.length === 1 && flowerbed[0] === 0) {
        n--;
        return n === 0;
    }
    for (let i = 0; i < flowerbed.length; i++) {
        if(n > 0){
            if (i == 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
                flowerbed[i] = 1;
                n--;
            }else if(i === (flowerbed.length-1) && flowerbed[i - 1] === 0 && flowerbed[i] === 0){
                flowerbed[i] = 1;
                n--;
            }else if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
                flowerbed[i] = 1;
                n--;
            }
        }else{
            return (n === 0)
        }
    }
    return (n === 0)
};