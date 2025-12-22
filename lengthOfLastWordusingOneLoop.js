function lengthOfLastWord(s){
    let count = 0;
    let n = s.length-1;

    while(n >= 0){
        if(s[n] != " "){
            ++count;
        }
        else if(count > 0){
            break;
        }
        --n;
    }
    return count;
}

let s = "Hello World"

let result = lengthOfLastWord(s);
console.log(result);