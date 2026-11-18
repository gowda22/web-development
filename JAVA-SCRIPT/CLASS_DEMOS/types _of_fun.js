// CLOSURE
// it is a cocept in js where inner or nested function remember the 
// varibales of outer function even after exicution is completed


// function outer(){
//   let count=10;
//   console.log(count);
//   function inner(){
    
//     count ++;
//     return count;

//   }  
//   return inner
// }
// let result = outer();
// console.log(result());//11
// console.log(result());//12
// console.log(result());//13


//string intercolation:-embade variable inside sting {using backticks and
// place holder $()[]

let str = "Hello JavaScript";
let str2 = "Welcome";

// 1. Uppercase
console.log(str.toUpperCase());

// 2. Lowercase
console.log(str.toLowerCase());

// 3. Length
console.log(str.length);

// 4. Includes
console.log(str.includes("Java"));

// 5. IndexOf
console.log(str.indexOf("Java"));

// 6. LastIndexOf
console.log("hello hello".lastIndexOf("hello"));

// 7. StartsWith
console.log(str.startsWith("Hello"));

// 8. EndsWith
console.log(str.endsWith("Script"));

// 9. Slice
console.log(str.slice(0, 5));

// 10. Substring
console.log(str.substring(6, 10));

// 11. CharAt
console.log(str.charAt(0));

// 12. At
console.log(str.at(-1));

// 13. CharCodeAt
console.log(str.charCodeAt(0));

// 14. Replace
console.log(str.replace("JavaScript", "Python"));

// 15. ReplaceAll
console.log("hi hi hi".replaceAll("hi", "hello"));

// 16. Trim
console.log("  Hello  ".trim());

// 17. TrimStart
console.log("  Hello".trimStart());

// 18. TrimEnd
console.log("Hello  ".trimEnd());

// 19. Concat
console.log(str.concat(" ", str2));

// 20. Repeat
console.log("Hello ".repeat(3));

// 21. Split
console.log("apple,banana,mango".split(","));

// 22. PadStart
console.log("5".padStart(3, "0"));

// 23. PadEnd
console.log("5".padEnd(3, "0"));

// 24. Search
console.log(str.search("Java"));

// 25. Match
console.log(str.match("Java"));





