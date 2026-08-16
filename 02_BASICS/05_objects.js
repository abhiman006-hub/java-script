//Destructuring of Objects;
let course={
    courseName:"javaScript",
    courseTeacher:"Hitesh Choudhary",
    courseDuration:"50 Lectures"
}

console.log(course);

//Destructuring of course
const {courseName }=course;//course.courseName=courseName
console.log(courseName);
console.log(course.courseName);

const {courseTeacher:master}=course;//renaming keys://master=course.courseTeacher
console.log(master);

//APIs

//json file:(object with no name );// in json keys and values both are string
{
    "name":"abhishek kumar",
    "roll":"2025UGCS016",
    "branch":"computer science and engineering"

}

//json file (array with no name):// elements of array as object;
[
    {},
    {},
    {}
]







