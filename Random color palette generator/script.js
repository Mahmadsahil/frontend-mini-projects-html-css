const container = document.querySelector(".container");
const box = document.querySelector(".box");
const refreshBtn = document.querySelector(".refreshBtn");

const MaxBox = 12;

refreshBtn.addEventListener("click", () => {

    container.innerHTML = "";  //clearing container first
    for (let i = 0; i < MaxBox; i++) {
        // Generating random Hex Code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;

        // Creating a new li and inserting in container.

        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="box" style="background:${randomHex}"></div>
                            <span class="hex-value">${randomHex}</span>`

        container.appendChild(color);
    }
})