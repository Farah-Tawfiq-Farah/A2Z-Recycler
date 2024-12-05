// Home page
// Banner button
let newsButton = document.querySelector("#to-news-page-button");

// Go to new page function
function goToPage() {
    window.location.href = "./news.html";
}
newsButton.addEventListener("click", goToPage);