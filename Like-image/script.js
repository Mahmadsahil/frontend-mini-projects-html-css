var box=document.querySelector(".box");
var like=document.querySelector(".ri-heart-fill");

box.addEventListener("dblclick",function(){
    like.style.transform="scale(1)";
    like.style.opacity="0.8";
    setTimeout(() => {
        like.style.transform="scale(0)";
        like.style.opacity="0";
    },1500);
    
})
