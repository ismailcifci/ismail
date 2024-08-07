
// Get the button
let topButton = document.getElementById("topButton");

// When the user scrolls down 10px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document with smooth behavior
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
