//SCOPEes:where ww can acces variable
// 1.block scope

// if(true){
//     let age=22;
//     console.log(age);//not access
//     const name="gowda";//not access
//     console.log(name)
//     var gender="male" //we can access 
//     console.log(gender)


// console.log(age)
// console.log(name)
// console.log(gender)

//FUNCTION SCOPE:var defined inside fun

// function student(){
//     let age=22
//     // console.log(age)
    
// }
// student()
// console.log(age)


// GLOBAL SCOPES
// DEFINED OUTSIDE FUN CAN ACCESS ANYWHERE

// 4.lexical scope: the inner fun can acess variable defined outside 
// let name = "Gowda";

// function outer() {
//     let age = 22;

//     function inner() {
//         console.log(name);
//         console.log(age);// access outer fun var
//     }

//     inner();
// }

// outer();



// HOISTING:MOVES varables and functions to top of scopes before exicuting
console.log(a);
var a=22 // yess undeined {completely}
console.log(b);
const b=22 // yess refeerence object
console.log(c);
let c=22 // yess undeined 

//hoisting function


hello()
function hello(){
    console.log("hello funcrtion")
}


//note:let and const stay in the temporval dead zone[TDZ] untill declaration is exicuted



//FUNCTIONS


