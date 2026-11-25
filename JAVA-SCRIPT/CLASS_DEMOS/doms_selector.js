
// let demo = document.getElementById("first");
// let sec = document.getElementById("second");


// console.log("INNER TEXT:");
// console.log(demo.innerText);

// console.log("INNER HTML:");
// console.log(demo.innerHTML);

// console.log("TEXT CONTENT:");
// console.log(demo.textContent);

// demo.innerText="this is  inner text <p>!! dom </p>";
// demo.innerHTML="this is  inner text <p>!! dom </p>";
// demo.classList.add("style1");
// demo.classList.replace("style1","style2")
// // Create div inside paragraph
// let div = document.createElement("div");
// div.innerText = "Hello Gowda! You are learning JavaScript.";


// Create heading
let heading = document.createElement("h1");
heading.innerText = "JavaScript DOM Practice";

// Create paragraph
let para = document.createElement("p");
para.innerText = "Welcome to my website!";

// Create div inside paragraph
let div = document.createElement("div");
div.innerText = "Hello Gowda! You are learning JavaScript.";

// Create span inside div
let span = document.createElement("span");
span.innerText = " Keep practicing every day!";

// Append elements
div.appendChild(span);
para.appendChild(div);

// Add everything to webpage
// document.body.appendChild(heading);
// document.body.appendChild(para);

