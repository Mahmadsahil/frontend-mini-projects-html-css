const imgs = document.querySelectorAll("img");
const display = document.querySelectorAll(".display");
const imgdiv = document.createElement("img");
const selectedImg = document.querySelector(".selectedImg");
const gallery = document.querySelector(".gallery");


gallery.addEventListener("click", (e) => {
    selectedImg.src = e.target.src;
}); 