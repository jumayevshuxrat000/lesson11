/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let k = i;
        let j = 0;
        while (k < haystack.length && haystack[k] === needle[j] && j < needle.length) {
            k++;
            j++;
        }
        if (j === needle.length) return i;
    }
    return -1;
};
console.log(strStr("sadbutsad", "sad")); 
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let obj = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i]);
        } else {
            const last = stack.pop();
            if (obj[last] !== s[i]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValid("()[]{}")); 
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ""; 
    }
    
    let a = strs[0]; 
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(a) !== 0) {
            a = a.slice(0, a.length - 1); 
            if (a === "") { 
                return ""; 
            }
        }
    }
    return a; 
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

