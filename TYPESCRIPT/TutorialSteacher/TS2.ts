let first: number = 123; // number
let second: number = 0x37cf; // hexadecimal
let third: number = 0o377; // octal
let fourth: number = 0b111001; // binary

console.log(first); // 123
console.log(second); // 14287
console.log(third); // 255
console.log(fourth); // 57

let ExpNo: number = 123465;
console.log(ExpNo.toExponential());
console.log(ExpNo.toExponential(1));
console.log(ExpNo.toExponential(2));
console.log(ExpNo.toExponential(3));
console.log(ExpNo.toExponential(4));

let myNumber: number = 10.87889;

console.log(myNumber.toFixed());
console.log(myNumber.toFixed(1));
console.log(myNumber.toFixed(2));
console.log(myNumber.toFixed(3));
console.log(myNumber.toFixed(4));

let myNumber2: number = 10667.987;

console.log(myNumber2.toLocaleString()); // returns 10,667.987 - US English
console.log(myNumber2.toLocaleString("de-DE")); // returns 10.667,987 - German
console.log(myNumber2.toLocaleString("ar-EG")); // returns 10667.987 in Arebic

let myNumber3: number = 10.5679;

console.log(myNumber3.toPrecision(1)); // returns 1e+1
console.log(myNumber3.toPrecision(2)); // returns 11
console.log(myNumber3.toPrecision(3)); // returns 10.6
console.log(myNumber3.toPrecision(4)); // returns 10.57

let myNumber4: number = 123;
console.log(myNumber4.toString()); // returns '123'
console.log(myNumber4.toString(2)); // returns '1111011'
console.log(myNumber4.toString(4)); // returns '1323'
console.log(myNumber4.toString(8)); // returns '173'
console.log(myNumber4.toString(16)); // returns '7b'
console.log(myNumber4.toString(36)); // returns '3f'

let myNumber5 = new Number(123);
console.log(myNumber5); //Output: a number object with value 123
console.log(myNumber5.valueOf()); //Output: 123
// console.log(typeof num); //Output: object

// let num2 = num.valueOf();
// console.log(num2); //Output: 123
// console.log(typeof num2); //Output: number
