// local reviews data
const data = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        descriptionData: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        descriptionData: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        descriptionData: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        descriptionData: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

const img = document.querySelector(".img");
const user = document.querySelector(".user");
const jobRole = document.querySelector(".job");
const description = document.querySelector(".description");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const random = document.querySelector(".random");

let currentReview = 0;


window.addEventListener("DOMContentLoaded", () => {
    const person = data[currentReview];
    img.src = person.img;
    user.textContent = person.name;
    jobRole.textContent = person.job;
    description.textContent = person.descriptionData;
})

function showPerson(CurrentPerson) {
    const person = data[CurrentPerson];
    img.src = person.img;
    user.textContent = person.name;
    jobRole.textContent = person.job;
    description.textContent = person.descriptionData;
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




