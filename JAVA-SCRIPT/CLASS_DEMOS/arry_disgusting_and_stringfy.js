const { jsx } = require("react/jsx-runtime");

//array disgustoing and rest operator
let numbers=[10,20,30,40,50,70,54];
let[a,b,c,...rest]=numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(rest);

//object disgusting
let students={
    names:"gowda",age:23,course:"python"
}

let(names,age,course)=students
console.log(names)
console.log(age)
console.log(course)

//chmage property name
let{ name:studentname} =students
console.log(studentname) 

//default vals
let {country="india"}=students;
console.log(country)



//stringigy

let student1={
    name:"bob",
    age:44,
}
let newstudent1=JSON.stringify(student1)//convert obj into stringify

console.log(newstudent1)

//parse() revers of stringfy "string to obbj"
let std=`{
    name:"harsha",
    age:33,
}   `

let objetttt=JSON.parse(std)

