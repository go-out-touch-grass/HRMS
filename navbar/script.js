document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const navigationheight = document.querySelector('nav').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navigationheight+ "px");