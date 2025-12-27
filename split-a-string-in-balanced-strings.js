
// //brute force
// function balancedStringSplit(s){
//     let L = 0;
//     let R = 0;
//     let count = 0;

//     for(let i=0 ; i<s.length ; i++){
//         if(s[i] === "R"){
//             R++;
//         }
//         else{
//             ++L;
//         }

//         if(L === R){
//             count++;
//             L=0;
//             R=0;
//         }
//     }
//     return count;
// }

// let  s = "RLRRLLRLRL";
// console.log(balancedStringSplit(s));

//optimised code
//brute force
function balancedStringSplit(s){
    let temp = 0;
    let count = 0;

    for(let i=0 ; i<s.length ; i++){
        if(s[i] === "R"){
            ++temp;
        }
        else{
            --temp;
        }

        if(temp === 0){
            count++;
        }
    }
    return count;
}

let  s = "RLRRLLRLRL";
console.log(balancedStringSplit(s));

