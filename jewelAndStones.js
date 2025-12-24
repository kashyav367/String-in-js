// brute force approach

// function numJewelsInStones(jewels , stones){

//     let count = 0;

//     for(let i=0 ; i<stones.length ; i++){
//         for(let j=0 ; j<jewels.length ; j++){
//             if(jewels[j] == stones[i]){
//                 count++;
//                 break;
//             }
//         }
//     }
//     return count;
// }

// let jewels = "aA", stones = "aAAbbbb"
// console.log(numJewelsInStones(jewels,stones));


//built-in method (brute-force)
// function numJewelsInStones(jewels,stones){
//     let count = 0;

//     for(let i=0 ; i<stones.length ; i++){
//           if(jewels.includes(stones[i]))
//                 count++;
//             }
        
//     return count;
// }


// let jewels = "aA", stones = "aAAbbbb"
// console.log(numJewelsInStones(jewels,stones));


//optimised code
function numJewelsInStones(jewels,stones){

    let jset = new Set();

    for(let i=0 ; i<jewels.length ; i++){
        jset.add(jewels[i]);
    }

    let count = 0;

    for(let i=0 ; i<stones.length ; i++){
          if(jset.has(stones[i]))
                count++;
            }
        
    return count;
}


let jewels = "aA", stones = "aAAbbbb"
console.log(numJewelsInStones(jewels,stones));