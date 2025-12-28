// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function booleanToString(bool){
    if(bool === true){
        return "Yes";
    }
    else{
        return "No";
    }
}
let bool = 0;
console.log(booleanToString(bool));