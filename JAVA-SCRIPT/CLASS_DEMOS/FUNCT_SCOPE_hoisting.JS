// // //SCOPEes:where ww can acces variable
// // // 1.block scope

// // // if(true){
// // //     let age=22;
// // //     console.log(age);//not access
// // //     const name="gowda";//not access
// // //     console.log(name)
// // //     var gender="male" //we can access 
// // //     console.log(gender)


// // // console.log(age)
// // // console.log(name)
// // // console.log(gender)

// // //FUNCTION SCOPE:var defined inside fun

// // // function student(){
// // //     let age=22
// // //     // console.log(age)
    
// // // }
// // // student()
// // // console.log(age)


// // // GLOBAL SCOPES
// // // DEFINED OUTSIDE FUN CAN ACCESS ANYWHERE

// // // 4.lexical scope: the inner fun can acess variable defined outside 
// // // let name = "Gowda";

// // // function outer() {
// // //     let age = 22;

// // //     function inner() {
// // //         console.log(name);
// // //         console.log(age);// access outer fun var
// // //     }

// // //     inner();
// // // }

// // // outer();



// // // HOISTING:MOVES varables and functions to top of scopes before exicuting
// // console.log(a);
// // var a=22 // yess undeined {completely}
// // console.log(b);
// // const b=22 // yess refeerence object
// // console.log(c);
// // let c=22 // yess undeined 

// // //hoisting function


// // hello()
// // function hello(){
// //     console.log("hello funcrtion")
// // }


// // //note:let and const stay in the temporval dead zone[TDZ] untill declaration is exicuted



// // //FUNCTIONS


// // 1.named function
// function demos(a,b){
//     console.log(a+b);
//     return;

// };
// console.log(demos(10,30));
// // 2.function expression
// let demo= function display (){
//     console.log("i am function expression")
// };
// demo();


// // 3.anonimas function:no fun name 

// let test=function(){
//     console.log("this is anonimous fun")
// };
// test();

// // arrow function:creating function without fun keyword
// // let arrow =()=>{
// //     console.log("i am arroe function")
// // };
// // arrow();

// // 1 statement 

// // let arrow=(a,b)=>{
// //     return a+b
// // }
// // console.log(arrow(10,20))



// //calling function

// // function demo(a){
// //     a()
// // }
// // function display(){
// //     console.log("i am anonimous function")

// // }
// // demo(display)


//higher order function

function higher (a,b,add){
    return add(a+b);
}
function process(a,b){
    return a+b
}
console.log(higher(10,30,process))

//  IIFE 

(function test(){
    console.log("this is IIEF FUNCTION")
})()


//DEFAULT FUNCRTION:

function defaults(a="not asigned ",b="not assigned",age=22)
{
    console.log(a);
    console.log(b);
    console.log(age)

}

//REST PARAMETER FUNCTION: ACCECPT ANY NUMBER OF ARGUMENTS IT WIL STORE IN ARRAY

function restparemeter(a,b,...rest){
    console.log(a);
    console.log(b);
    console.log(rest);


}
restparemeter(12,45,55,44,"alan","bob")





