const { log } = require("console")


let arr = [1,2,3,4,5,6,7,8,9]
let m = 3
m = m+1;
let arr1 =[]
let arr2 =[]
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] <= m){
        arr1.push(arr[i])
    }
    else{
        arr2.push(arr[i])
    }
}
arr2 = arr2.reverse()
arr1 = arr1.concat(arr2)

