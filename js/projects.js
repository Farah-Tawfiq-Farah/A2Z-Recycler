// Contact Us page
// Accordion Items
const accordionItemHeader = document.querySelectorAll(".accordion-item-header");
var accordionLink = $("#accordion-link");

// Accordion Code
// Loop through each accordion item header
accordionItemHeader.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
        // Select the next sibling element, which is the accordion item body
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")) {
            // Expand the accordion item body to its full height
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        // Collapse the accordion item body by setting its max height to 0
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});