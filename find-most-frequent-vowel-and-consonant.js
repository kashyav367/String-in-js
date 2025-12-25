// function maxFreqSum(s){

//     let map = {};

//     for(let i=0 ; i<s.length ; i++){
//         if(!map[s[i]]){
//             map[s[i]] = 1;
//         }
//         else{
//             ++map[s[i]];
//         }
//     }

//     let vowels = ['a' , 'e' , 'i' , 'o' ,'u'];
//     let maxVowel = 0;
//     let maxConsonant = 0;
    
//     for(let i=0 ; i<s.length ; i++){
//         if(vowels.includes(s[i])){
//             if(map[s[i]] > maxVowel){
//                 maxVowel = map[s[i]];
//             }
//         } 
//             else{
//                 if(map[s[i]] > maxConsonant){
//                     maxConsonant = map[s[i]];
//                 }
//             }
//         }
//     return maxConsonant + maxVowel;
// }

//  let s = "aeiaeia";
//  console.log(maxFreqSum(s));


//--optimised code ---///
function maxFreqSum(s){

    let map = {};

    for(let i=0 ; i<s.length ; i++){
       map[s[i]] = !map[s[i]] ?  1 : ++map[s[i]];
    }

    let vowels = ['a' , 'e' , 'i' , 'o' ,'u'];
    let maxVowel = 0;
    let maxConsonant = 0;
    let mapKeys = Object.keys(map);
    
    for(let i=0 ; i<mapKeys.length ; i++){
        if(vowels.includes(mapKeys[i])){
            maxVowel = Math.max(maxVowel,map[mapKeys[i]])
        } 
            else{
                maxConsonant = Math.max(maxConsonant,map[mapKeys[i]])
            }
        }
    return maxConsonant + maxVowel;
}

 let s = "aeiaeia";
 console.log(maxFreqSum(s));