function lengthOfLastWord(s){
     s = s.trim();
    s = s.split(" ");

    console.log(s[s.length-1].length);
} 

let s = "Hello World"
lengthOfLastWord(s);
