// function lengthOfLastWord(s){
//      s = s.trim();
//     s = s.split(" ");

//     console.log(s[s.length-1].length);
// } 

// let s = "Hello World"
// lengthOfLastWord(s);

// function lengthOfLastWord(s){
//     let n = s.length-1

//     while(n >= 0){
//         if(s[n] === " "){
//             --n;
//         }
//         else{
//             break;
//         }
//     }

//     let count = 0;

//     while(n >= 0){
//         if(s[n] != " "){
//             --n;
//             count++;
//         }
//         else{
//             break;
//         }
//     }
//     return count;
// } 

// let s = "Hello World"

// let result = lengthOfLastWord(s);
// console.log(result);


function lengthOfLastWord(s){
    let n = s.length-1

    while(n >= 0){
        if(s[n] != " ") break;
         --n;
    }

    let count = 0;

    while(n >= 0){
        if(s[n] === " ") break;
            --n;
            count++;
    }
    return count;
} 

let s = "Hello World"

let result = lengthOfLastWord(s);
console.log(result);
