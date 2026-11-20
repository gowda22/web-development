
// 1. OBJECT LITERAL
// Collection of key-value pairs

let car = {
    name: "BMW",
    colour: "Red",
    door: 4,
    wheel: 4
};

console.log(car);


// 2. NEW OBJECT KEYWORD
// Properties can be added separately

let car3 = new Object();

car3.name = "BMW";
car3.colour = "Red";
car3.door = 4;
car3.wheel = 4;

console.log(car3);


// 3. ACCESS / READ PROPERTIES

console.log(car.colour);       // Dot notation
console.log(car["name"]);      // Bracket notation


// 4. NESTED OBJECT

let student = {
    name: "Gowda",
    age: 23,

    marks: {
        english: 99,
        maths: 99
    }
};

// Access nested object
console.log(student.marks.english);


// 5. ADD NEW NESTED OBJECT

student.marks2 = {
    social: 99,
    gk: 99,
    python: 88
};

console.log(student);


// 6. OPTIONAL CHAINING (?.)

console.log(student.details?.marks); 
// undefined (no error)


// 7. UPDATE PROPERTIES

student.name = "Harsha";
student.age = 33;

console.log(student);


// 8. UPDATE NESTED OBJECT PROPERTY

student.marks.english = 77;

console.log(student.marks);


// 9. DELETE PROPERTY

delete student.age;

console.log(student);


// 10. DELETE NESTED PROPERTY

delete student.marks.maths;

console.log(student.marks);
