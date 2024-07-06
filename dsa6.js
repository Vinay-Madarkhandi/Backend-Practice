//20. Valid Parentheses 
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = s.split("")
    for(let l = 0; l < arr.length ; l+=2){
        for(let r = l+1 ; r < arr.length; r+=2){
            if(arr[l]=="(" && arr[r]==")"){
                return true      
            }else if(arr[l]=="[" && arr[r]=="]"){
                return true
            }else if(arr[l]=="{" && arr[r]=="}"){
                return true
            }else{
                return false
            }
           
        }
    }
    
    
};

isValid("()[]{}")

