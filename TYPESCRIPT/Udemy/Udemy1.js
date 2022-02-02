var a = 12123131;
var b = "Sahil";
var c = true;
console.log(a, b, c);
var languagesKnown;
(function (languagesKnown) {
    languagesKnown[languagesKnown["English"] = 0] = "English";
    languagesKnown[languagesKnown["Hindi"] = 1] = "Hindi";
    languagesKnown[languagesKnown["Urdu"] = 2] = "Urdu";
})(languagesKnown || (languagesKnown = {}));
var student = {
    Name: "Sahil",
    Age: 22,
    Phone: 454515131,
    language: languagesKnown[languagesKnown.Urdu]
};
var studentsList = [
    {
        Name: "Payal",
        Age: 25,
        Phone: 454515,
        language: languagesKnown[languagesKnown.Hindi]
    },
    {
        Name: "Roy",
        Age: 36,
        Phone: 45400515,
        language: languagesKnown[languagesKnown.English]
    },
];
studentsList.push(student);
for (var index = 0; index < studentsList.length; index++) {
    var element = studentsList[index];
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
function GetStudentsList(student) {
    student.forEach(function (element) {
        console.log("Name is " +
            element.Name +
            " Age is " +
            element.Age +
            " Phone no is " +
            element.Phone +
            " Language is " +
            element.language);
    });
}
GetStudentsList(studentsList);
