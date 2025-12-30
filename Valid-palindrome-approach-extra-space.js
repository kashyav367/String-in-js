function validPalindrome(s){
    s = s.toLowerCase();

    let filteredString = "";
    for(let i=0 ; i<s.length ; i++){
        if(s[i].match(/[a-z0-9]/i)){
            filteredString += s[i];
        }
    }
    let rev = filteredString.split("").reverse().join("");
    return filteredString === rev;
}

let s = "A man, a plan, a canal: Panama"
console.log(validPalindrome(s));

