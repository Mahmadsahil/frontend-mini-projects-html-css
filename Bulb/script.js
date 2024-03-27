const bulb=document.querySelector(".bulb");
const btn=document.querySelector(".btn");

btn.addEventListener("click",()=>{
    bulb.classList.toggle("light");
})
