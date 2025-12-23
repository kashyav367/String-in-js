//using built-in method;

// function findWordContainingCharacter(words,x){
//      let res = [];
//     for(let i=0 ; i<words.length ; i++){
//         if(words[i].includes(x)){
//             res.push(i)
//         }
//     }
//     return res;
// }

// let words = ["leet","code"]
// let x = "e"

// console.log(findWordContainingCharacter(words,x));

//using language enthusiast
function findWordContainingCharacter(words,x){
     let res = [];
    for(let i=0 ; i<words.length ; i++){
    for(let j=0 ; j<words.length ; j++){
            if(words[i][j] === x){
                res.push;
            }
        }
    }
    return res;
}
let words = ["abc","bcd","aaaa","cbc"]
let x = "z"

console.log(findWordContainingCharacter(words,x));
