const btn = document.querySelector(".btnSwitch");
const video = document.querySelector(".video");
const preloader = document.querySelector(".preloader");

btn.addEventListener('click', () => {
    if (!btn.classList.contains("slid")) {
        btn.classList.add("slid");
        video.pause();
    } else {
        btn.classList.remove("slid");
        video.play()
    }
});

window.addEventListener('load',()=>{
    preloader.classList.add('hide-preloader');
})