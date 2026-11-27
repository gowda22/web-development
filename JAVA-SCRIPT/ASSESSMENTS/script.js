
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");

let mainImage = document.getElementById("mainImage");


img1.addEventListener("click", function () {
    mainImage.src = img1.src;
});


img2.addEventListener("click", function () {
    mainImage.src = img2.src;
});


img3.addEventListener("click", function () {
    mainImage.src = img3.src;
});


img4.addEventListener("click", function () {
    mainImage.src = img4.src;
});



