// brute force approach
function validAnagram(s,t){
    return (s.split("").sort().join("") === t.split("").sort().join(""));
}

let s = "anagram"
let t = "nagaram"
console.log(validAnagram(s,t));