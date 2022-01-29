// let num1: number = 1;

// function letDeclaration() {
//   let num2: number = 2;

//   if (num2 > num1) {
//     let num3: number = 3;
//     num3++;
//   }

//   while (num1 < num2) {
//     let num4: number = 4;
//     num1++;
//   }

//   console.log(num1); //OK
//   console.log(num2); //OK
//   // console.log(num3); //Compiler Error: Cannot find name 'num3'
//   // console.log(num4); //Compiler Error: Cannot find name 'num4'
// }

// letDeclaration();

// // console.log(num6); // Compiler Error: error TS2448: Block-scoped variable 'num' used before its declaration
// let num6: number = 10;

// console.log(num7); // OK, Output: undefined
// var num7: number = 10;

// let num: number = 1;

// function demo() {
//   let num: number = 2;

//   if (true) {
//     let num: number = 3;
//     console.log(num); //Output: 3
//   }

//   console.log(num); //Output: 2
// }
// console.log(num); //Output: 1
// demo();

// function letDemo(a: number) {
//   // let a: number = 10; //Compiler Error: TS2300: Duplicate identifier 'a'
//   let b: number = 20;

//   return a + b;
// }

// let num56 = letDemo(5);
// console.log(num56);

// const num: number = 100;
// num = 200; //Co

// const num: number; //Compiler Error: const declaration must be initialized
// num = 100;

// const playerCodes = {
//   player1: 9,
//   player2: 10,
//   player3: 13,
//   player4: 20,
// };
// playerCodes.player2 = 11; // OK

// // playerCodes = {
// //   //Compiler Error: Cannot assign to playerCodes because it is a constant or read-only
// //   player1: 50, // Modified value
// //   player2: 10,
// //   player3: 13,
// //   player4: 20,
// // };

// console.log(playerCodes);

const playerCodes = {
  player1: 9,
  player2: 10,
  player3: 13,
  player4: 20,
};

// playerCodes = { //Compiler Error: Cannot assign to playerCodes because it is a constant or read-only
//   player1: 9,
//   player2: 10,
//   player3: 13,
//   player4: 20,
//   player5: 22
// };
console.log(playerCodes);
