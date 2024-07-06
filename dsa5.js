var isPalindrome = function(x) {
    let str = n.toString();
    
    // Reverse the string
    let reversedStr = str.split('').reverse().join('');
    
    // Convert the reversed string back to an integer
    let reversedInt = parseInt(reversedStr); 

    if(reversedInt === x){
        return true
    }
    else{
        return false
    }
};