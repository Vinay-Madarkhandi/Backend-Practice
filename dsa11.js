// 
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    return Math.floor(numBottles + (numBottles-1)/(numExchange-1))

};

console.log(numWaterBottles(9,3))