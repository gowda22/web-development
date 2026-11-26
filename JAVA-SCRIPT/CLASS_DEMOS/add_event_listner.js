const button = document.querySelector("button");
const child = document.querySelector(".child");
const parent = document.querySelector(".parent");
const grandparent = document.querySelector(".grandparent");

button.addEventListener("click", function () {
    console.log("Button");
});

child.addEventListener("click", function () {
    console.log("Child");
});

parent.addEventListener("click", function () {
    console.log("Parent");
});

grandparent.addEventListener("click", function () {
    console.log("Grandparent");
});

document.body.addEventListener("click", function () {
    console.log("Body");
});