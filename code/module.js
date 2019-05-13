//Module struct cmd counter
'use strict';

const args = process.argv.slice(2);

if(args.length !== 3)
{
    console.log('Illegal operator');
    throw new Error('Illegal operator');
}
let parameter1 = args[0];
let operator = args[1];
let parameter2 = args[2];

let result;

const calc = require('./module/calculator.js');

switch(operator){
    case'+':
        result = calc.add(parameter1,parameter2);
        break;
    case'-':
        result = calc.sub(parameter1,parameter2);
        break;
    case'*':
        result = calc.mul(parameter1,parameter2);
        break;
    case'/':
        result = calc.div(parameter1,parameter2); 
        break;
    default:
        throw new Error('Non-support operator'+ operator);
}

console.log(result);