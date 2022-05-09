console.log('addPrefix');

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (input , prefix) => {
const output = [];
for (const item of input) {    
    output.push(prefix + " " + item);
}
return output;
}

const result3 = addPrefix(names, 'Mr');
console.log('result3: ', result3);
