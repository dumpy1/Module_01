console.log('Capitalize');

const capitalize = (str) => {
    
let inputString = str;

const outputString = inputString[0].toUpperCase() + inputString.slice(1);
return outputString;

}
console.log('capitalize: ', capitalize('hello world'));