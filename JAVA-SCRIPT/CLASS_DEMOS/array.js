
// 1. Array of students
let students = ["gowda", "harsha", "prajwal", "shivu"];

console.log(students);
console.log(typeof students);

// 2. Array using Array constructor
let fruits = new Array("apple", "banana", "mango");

console.log(fruits);



// 3. Find length
console.log(fruits.length);

// 4. Access first element
console.log(fruits[0]);

// 5. Add at end
fruits.push("orange");
console.log(fruits);

// 6. Remove from end
fruits.pop();
console.log(fruits);


// 7. Add at beginning
fruits.unshift("grapes");
console.log(fruits);


// 8. Remove from beginning
fruits.shift();
console.log(fruits);

// 9. Check element
console.log(fruits.includes("mango"));

// 10. Find index
console.log(fruits.indexOf("banana"));

// 11. Extract elements
console.log(fruits.slice(0, 2));

// 12. Remove element using splice
fruits.splice(1, 1);// banaa removed
console.log(fruits);

//to add
fruits.splice(1,0,"banana","mango","true");
console.log(fruits)

// 13. Join elements
console.log(fruits.join(" - "));

// 14. Reverse array
console.log(fruits.reverse());

// 15. Convert to uppercase
console.log(fruits.map(x => x.toUpperCase()));

// 16. Filter elements
console.log(fruits.filter(x => x.length > 5));

// 17. Loop through array
fruits.forEach(x => console.log(x));

// 18. Check whether it is an array
console.log(Array.isArray(fruits));




//
let arr = [1, "Gowda", 2, "Harsha", 3, "Prajwal", 4, "Shivu"];

let numbers = [];
let names = [];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
        numbers.push(arr[i]);
    } else {
        names.push(arr[i]);
    }
}

console.log("Numbers:", numbers);
console.log("Names:", names);





















