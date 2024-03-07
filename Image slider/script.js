// local reviews data
const data = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    }, {
        id: 3,
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
    }, {
        id: 4,
        img: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    }, {
        id: 5,
        img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
];

const img = document.querySelector(".img");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentReview = 0;


window.addEventListener("DOMContentLoaded", () => {
    const person = data[currentReview];
    img.src = person.img;
})

function showPerson(CurrentPerson) {
    const person = data[CurrentPerson];
    img.src = person.img;
}

next.addEventListener("click", () => {
    currentReview++;
    if (currentReview > data.length - 1) {
        currentReview = 0;
    }
    showPerson(currentReview);
})


prev.addEventListener("click", () => {
    currentReview--;
    if (currentReview > 0) {
        currentReview = data.length - 1;
    }
    showPerson(currentReview);
})




