var h5=document.querySelector("h5");
var btn=document.querySelector("#btn");

var flag=0;

btn.addEventListener("click",()=>{
    if(flag == 0){
        h5.style.color="green";
        h5.innerHTML="Friend";
        btn.innerHTML="Remove Friend";
        flag=1;
    }else{
        h5.style.color="red";
        h5.innerHTML="Strenger";
        btn.innerHTML="Add Friend";
        flag=0;
    }

})