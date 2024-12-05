const image = document.querySelector(".purpose-image");
const h2 = document.querySelector(".purpose-title");

// Load the image, title, and the text of the slide
const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('title');
const pages = [
{
    ID : "plastic",
    imageSrc : "./img/bottles.jpg",
    imageAlt : "plastic-bottles-image",
    title : "Recycling tips for plastic bottles"
},
{
    ID : "aluminum",
    imageSrc : "./img/cans.jpg",
    imageAlt : "aluminum-cans-image",
    title : "Recycling tips for aluminum cans"
},
{
    ID : "papers",
    imageSrc : "./img/papers.jpg",
    imageAlt : "papers-image",
    title : "Recycling tips for paper products"
},
{
    ID : "cartons",
    imageSrc : "./img/cartons.jpg",
    imageAlt : "cartons-image",
    title : "Recycling tips for carton products"
}
];

const currentPage = pages.find(function(p) { return p.ID === title });
image.src = currentPage.imageSrc;
image.alt = currentPage.imageAlt;
h2.innerText = currentPage.title;