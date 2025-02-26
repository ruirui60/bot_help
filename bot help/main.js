window.addEventListener("scroll", function() {
    const footer = document.querySelector("footer");
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        footer.style.bottom = "0";
        footer.style.opacity = "1";
    }
});