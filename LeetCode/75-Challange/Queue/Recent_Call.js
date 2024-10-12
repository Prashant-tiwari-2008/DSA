// You have a RecentCounter class which counts the number of recent requests within a certain time frame.

// Implement the RecentCounter class:

// RecentCounter() Initializes the counter with zero recent requests.
// int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
// It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.

//todo : not able to understand the question
// chatGPT Solution
var RecentCounter = function() {
    this.queue = [];
};

RecentCounter.prototype.ping = function(t) {
    this.queue.push(t); // Add the current ping timestamp
    // Remove all elements that are outside the range [t - 3000, t]
    while (this.queue[0] < t - 3000) {
        this.queue.shift();
    }
    // The remaining elements are the requests in the last 3000 milliseconds
    return this.queue.length;
};

let recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));   // Output: 1 (only 1 request in the range [1-3000, 1])
console.log(recentCounter.ping(100)); // Output: 2 (2 requests in the range [-2900, 100])
console.log(recentCounter.ping(3001)); // Output: 3 (3 requests in the range [1, 3001])
console.log(recentCounter.ping(3002)); // Output: 3 (3 requests in the range [2, 3002])
