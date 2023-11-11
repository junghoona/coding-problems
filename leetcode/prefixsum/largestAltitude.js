// Given an integer array gain of length n where 
// gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n),
// return the highest altitude of a point.


/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let currentAltitude = 0;
    let altitudes = [currentAltitude];
    // iterate over gain.length
    for (let i = 0; i < gain.length; i++) {
        currentAltitude += gain[i];
        altitudes.push(currentAltitude);
    }
    return Math.max(...altitudes);
};
