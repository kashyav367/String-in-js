// brute force approach
// function validAnagram(s,t){
//     return (s.split("").sort().join("") === t.split("").sort().join(""));
// }

// let s = "anagram"
// let t = "nagaram"
// console.log(validAnagram(s,t));

//optimised 

function validAnagram(s,t){
    
    if(s.length != t.length) return false;

    let map = {};

    for(let i=0 ; i<s.length ; i++){
        if(!map(s[i])){
            map[s[i]] = 1;
        }
        else{
            ++map[s[i]];
        }
    }

    for(let i=0 ; i<t.length ; i++){
        if(!map[t[i]] || map[t[i]]<0){
            return false;
        }
        else{
            --map(t[i])
        }
    }
    return true;
}

let s = "race";
let t = "car"

console.log(validAnagram(s,t));