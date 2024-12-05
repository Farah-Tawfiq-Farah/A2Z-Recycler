// Select Items
// Navbar Items
let skipToMainLink = $(".skip");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

// Footer Button
let toTopButton = $("#to-top");

// Scroll function
function scrollToElement(target) {
    $('html, body').animate({
        scrollTop: $(target).offset().top - 100
    }, 1750);
}

// Navbar codes 
// Show and hide the menu on mobile
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Close the hamburger menu when any of the links are pressed
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// The clock code
setInterval(()=>{
    const time = document.querySelector(".clock");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let AM_PM = "PM";

    if(hours > 11){
        let AM_PM = "AM";
        hours = hours - 12;
    }
    if(hours == 0){
        hours = 12;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(hours < 10){
        hours = "0" + hours;
    }

    time.innerHTML = hours + ":" + minutes + ":" + seconds + " " + AM_PM;
});

// Handle speach recognition
document.getElementById('mic-icon').addEventListener('click', function() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById('search').value = transcript;
    };

    recognition.onspeechend = function() {
        recognition.stop();
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
    };

    recognition.start();
});

document.getElementById('search-icon').addEventListener('click', function() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    if (searchTerm) {
        const elements = document.querySelectorAll('h3, h2, p, a'); // Elements to search within
        let found = false;
        
        elements.forEach(function(element) {
            if (element.textContent.toLowerCase().includes(searchTerm)) {
                scrollToElement(element);
                element.style.backgroundColor = "yellow"; // Highlight the found element
                found = true;
                return false; // Break the loop
            }
        });

        if (!found) {
            alert('No matches found.');
        }
    }
});

// Skip to main scroll code
skipToMainLink.click(function(){
    scrollToElement($(this).attr("href"));
});

// Footer Code
// Footer Button to scroll to top code (jQuery)
toTopButton.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 1750);
});
// End of Footer Code

// Start of Conferbot Script
(function (d, s, id) {
    var js, el = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.async = true;
    js.src = 'https://s3.ap-south-1.amazonaws.com/conferbot.defaults/dist/v1/widget.min.js';
    js.id = id;
    js.charset = 'UTF-8';
    el.parentNode.insertBefore(js, el);
    js.onload = function () {
      var w = window.ConferbotWidget("6662e0c33f89ee9c35405b5a", "live_chat");
    };
  })(document, 'script', 'conferbot-js');
