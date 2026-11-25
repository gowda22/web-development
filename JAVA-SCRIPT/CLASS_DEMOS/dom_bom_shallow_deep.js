let heading=document.getElementById("tittle")
heading.innerHTML="welcome js example after do perfromanc"



//shallow copy 



let students={
    name:"gowda",age:22,
    marks:{math:80,python:60},
}
let newstudent={...students}//use rest operator
newstudent.name="rahul"// not chnage
newstudent.marks.math=50 ///change nested obj 

console.log(students.name); //op gowda 
console.log(students.marks.math);// 50





