// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

let asteroids = [5, 10, -5]
let asteroids1 = [8, -8]
let asteroids2 = [10, 2, -5]
let asteroids3 = [-2, -1, 1, 2]  // [-2,-1,1,2]

var asteroidCollision = function (asteroids) {
    let stack = [];
    let i = 0;
    while (i < asteroids.length) {
        if (i == 0) {
            stack.push(asteroids[i])
            i++;
        } else {
            let stackTopEleDir = Math.sign(stack[stack.length - 1]);
            let newEleSign = Math.sign(asteroids[i]);
            if (stackTopEleDir > newEleSign) {
                let newEle = Math.abs(stack.pop());
                if (newEle == Math.abs(asteroids[i])) {
                    i++;
                } else if (newEle > Math.abs(asteroids[i])) {
                    stack.push(newEle);
                    i++;
                }
            } else {
                stack.push(asteroids[i])
                i++;
            }
        }
    }
    return stack;
};

console.log(asteroidCollision(asteroids))
console.log(asteroidCollision(asteroids1))
console.log(asteroidCollision(asteroids2))
console.log(asteroidCollision(asteroids3))

//chatGPT solution
var asteroidCollision = function(asteroids) {
    let stack = [];
    
    for (let asteroid of asteroids) {
        // The asteroid moves to the right or no collision occurs
        let collision = true;
        
        while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
            // Handle collision between moving right (stack top) and left (current asteroid)
            if (stack[stack.length - 1] < -asteroid) {
                // Stack top explodes, continue checking
                stack.pop();
            } else if (stack[stack.length - 1] === -asteroid) {
                // Both explode
                stack.pop();
                collision = false;
                break;
            } else {
                // Asteroid explodes
                collision = false;
                break;
            }
        }
        
        if (collision) {
            stack.push(asteroid);
        }
    }
    
    return stack;
};


// Right solution but not fit for the question
var asteroidCollision_extra = function (asteroids) {
    let stack = [];
    let i = 0;
    while (i < asteroids.length) {
        if (i == 0) {
            stack.push(asteroids[i])
            i++;
        } else {
            let newEleSign = Math.sign(stack[stack.length - 1]);
            if (newEleSign == Math.sign(asteroids[i])) {
                stack.push(asteroids[i])
                i++;
            } else {
                let newEle = Math.abs(stack.pop());
                if (newEle == Math.abs(asteroids[i])) {
                    i++;
                } else if (newEle > Math.abs(asteroids[i])) {
                    stack.push(newEle);
                    i++;
                }
            }
        }
    }
    return stack;
};
