const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerButton = window.innerHeight / 5 * 4;
    console.log(triggerButton);

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        console.log(boxTop);

        if (boxTop < triggerButton) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}