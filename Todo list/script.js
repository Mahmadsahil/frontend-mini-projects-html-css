const btn = document.querySelector('.btn');
const listCont = document.querySelector('.listCont');
const errorMsgCont = document.querySelector('.errorMsgCont');

btn.addEventListener('click', () => {
    let inpValue = document.querySelector('.inp').value;
    if (inpValue === '') {
        errorMsgCont.innerHTML=`<p class="errorMsg">Write somethis to add</p>`;
    }else{
        document.querySelector('.inp').value='';
        errorMsgCont.innerHTML='';
        const div = document.createElement('div');
        div.classList.add("card");
        div.innerHTML = `  <span class="cancleBtn"></span> <p>${inpValue}</p>`;
        listCont.appendChild(div);
    }
})

listCont.addEventListener('click',(e)=>{
    listCont.removeChild(e.target);
})