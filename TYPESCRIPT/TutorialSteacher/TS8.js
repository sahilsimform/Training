// function display(Fname: string, Sname: string): string;
// function display(Fname: number, Sname: number): number;
// function display(Fname: any, Sname: any): any {
//   return Fname + Sname;
// }
// console.log(display(2, 5));
// console.log(display("Sahil", "Singh"));
// console.log(display(1, "Payal"));
// function display2(a: string, b: string) {
//   console.log(a + " " + b);
// }
// function dispaly2(a: string) {
//   console.log(a);
// }
// display2("Sahil", "Singh");
// // display2("Sahil");
// function job(greating: string, ...name: string[]) {
//   return greating + " My name is: " + name.join(", ");
// }
// console.log(job("Hello", "Sahil", "Payal"));
// console.log(job("HII..!", "Sonu", "Pooja"));
// console.log(job("HII..!"));
// let job2 = (greating1: string, ...name1: string[]) => {
//   return greating1 + " " + name1.join(", ") + "!";
// };
// console.log(job2("Hello", "Sahil", "Payal"));
// console.log(job2("Hello"));
// interface Pair1 {
//   key: number;
//   value: string;
// }
// let key1: Pair1 = { key: 1, value: "Sahil" };
// console.log(key1);
// let key2: Pair1 = { key: 2, value: "Payal" };
// console.log(key2);
// interface People {
//   (key: number, value: number): void;
// }
// function AddPeople(key: number, value: string): void {
//   console.log("Adding the People Key: " + key + " value is :" + value);
// }
// function UpdatingPeople(key: number, value: string): void {
//   console.log("Updating the People Key: " + key + " value is " + value);
// }
// let People_1: People = AddPeople;
// console.log(People_1(1, "Sahil"));
// People_1 = UpdatingPeople;
// console.log(People_1(2, "Pooja"));
// interface Numlist {
//   [index: number]: number;
// }
// let numArr: Numlist = [1, 2, 3];
// console.log(numArr[0]);
// console.log(numArr[1]);
// setTimeout(function () {
//   console.log("Hello World");
// }, 5000);
// const sayHello = function (a) {
//   return function () {
//     console.log("Hello!" + a);
//   };
// };
// function outside() {
//   var x = 5;
//   function inside(x) {
//     return x * 2;
//   }
//   return inside;
// }
// outside()(10); // returns 20 instead of 10
// const myFunc = sayHello(3);
// myFunc();
// // Hello!
function outside() {
    var x = 5;
    function inside(x) {
        return x * 2;
    }
    return inside;
}
console.log(outside()(10)); // returns 20 instead of 10
