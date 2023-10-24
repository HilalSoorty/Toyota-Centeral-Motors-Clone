document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        // Show the button when scrolling down
        if (window.scrollY > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        // Smoothly scroll to the top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
