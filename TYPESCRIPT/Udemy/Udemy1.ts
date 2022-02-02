var a: number = 12123131;
var b: string = "Sahil";
var c: boolean = true;

console.log(a, b, c);

enum languagesKnown {
  "English",
  "Hindi",
  "Urdu",
}
let student = {
  Name: "Sahil",
  Age: 22,
  Phone: 454515131,
  language: languagesKnown[languagesKnown.Urdu],
};

let studentsList = [
  {
    Name: "Payal",
    Age: 25,
    Phone: 454515,
    language: languagesKnown[languagesKnown.Hindi],
  },
  {
    Name: "Roy",
    Age: 36,
    Phone: 45400515,
    language: languagesKnown[languagesKnown.English],
  },
];

studentsList.push(student);

for (let index = 0; index < studentsList.length; index++) {
  const element = studentsList[index];
  //   console.log(element);
  // console.log(
  //   "Name is " +
  //     element.Name +
  //     " Age is " +
  //     element.Age +
  //     " Phone no is " +
  //     element.Phone +
  //     " Language is " +
  //     element.language
  // );
}

function GetStudentsList(student: any[]) {
  student.forEach((element) => {
    console.log(
      "Name is " +
        element.Name +
        " Age is " +
        element.Age +
        " Phone no is " +
        element.Phone +
        " Language is " +
        element.language
    );
  });
}

GetStudentsList(studentsList);
