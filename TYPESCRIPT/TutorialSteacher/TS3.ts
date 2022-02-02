let str: string = "Hello TypeScript";
console.log(str.charAt(0)); // returns 'H'
console.log(str.charAt(2)); // returns 'l'

let str1: string = "Singh";
let str2: string = "Singh";
let name1 = str1.concat(str2);
let name2 = str1.concat("  ", str2);
let name3 = str1.concat(" Ms. ", "Payal");
console.log(name1);
console.log(name2);
console.log(name3);

let str3: string = "Sahil Singh";
console.log(str3.indexOf("h"));
console.log(str3.indexOf("i"));
console.log(str3.indexOf("g"));
console.log(str3.indexOf("h"));

let Name4: string = "Sahil Singh";
let Name5: string = "Payal Singh";

console.log(Name4.replace("Sahil", "Sopnil"));
console.log(Name4.replace("Sahil", Name5));

let str4: string = "Apple,Orange,Banana";
let str5: string = ",";
console.log(str4.split(str5));
console.log(str4.split(","));
console.log(str4.split(",", 2));
console.log(str4.split(",", 1));
console.log(str4.split(",", 0));

let str6: string = "my name is Sahil";
console.log(str6.toUpperCase());

let str7: string = "my name is Sahil";
console.log(str7.toLowerCase());

let bo: boolean = true;
console.log(bo);
