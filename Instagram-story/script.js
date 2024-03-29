var arr = [
    { dp: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" }
    , { dp: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" }
    , { dp: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1524666041070-9d87656c25bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" }
    , { dp: "https://plus.unsplash.com/premium_photo-1674586421928-1f80e29dbf6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" }
    , { dp: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", story: "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" }
];


var story_section=document.querySelector(".section");
var clutter = "";

arr.forEach(function(elem,idx){
    clutter += `<div class="stories">
    <img id="${idx}" src="${elem.dp}" alt="">
     </div>`
})

story_section.innerHTML=clutter;

story_section.addEventListener("click",function(dets){
    document.querySelector(".full_screen").style.display="block";
    document.querySelector(".full_screen").style.backgroundImage =`url(${arr[dets.target.id].story})`;
    
    setTimeout(() => {
        
        document.querySelector(".full_screen").style.display="none";
    }, 3000);
})
