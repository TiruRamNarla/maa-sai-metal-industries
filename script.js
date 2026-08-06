// Maa Sai Metal Industries Website

console.log("Website Loaded Successfully");

document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });
    });

}); 