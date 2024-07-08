/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    s1 = s1.split("").reverse().join("")
    if(s2.includes(s1)){
        return true
    }else{
        return false
    }
};
