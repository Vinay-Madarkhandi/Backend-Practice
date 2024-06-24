// solving question of pall

/* Declare and implement your function here 
eg: function example(parameter_name1,parameter_name2....){}
Handle the input/output from main()
*/
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
input_stdin += data;
});

process.stdin.on('end', function () {
input_stdin_array = input_stdin.split("\n");
main();    
});

function readLine() {
return input_stdin_array[input_currentline++];
}

function cleanString(input) {
    return input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}
function isPalindrome(str) {
    const cleanedStr = cleanString(str);
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}


function main() {
let numStrings = parseInt(readLine().trim(), 10);

    for (let i = 0; i < numStrings; i++) {
        let str = String(readLine()).trim();
        const result = isPalindrome(str);
        console.log(result ? "Yes" : "No");
    }
}