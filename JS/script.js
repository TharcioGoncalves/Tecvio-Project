let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let progressBar = entry.target.querySelectorAll(".progress-bar");
            progressBar.forEach(bar => {
                let target = bar.getAttribute("data-target");
                bar.style.width = target + "%";
                observer.unobserve(entry.target);
            })
        }
    })
}, { threshold: 0.5 });
observer.observe(document.querySelector(".progress-section"));

window.addEventListener("load", function () {
    let preloader = document.querySelector(".preloader");
    preloader.classList.add("aberto")
    setTimeout(function () {
        preloader.style.opacity = "0";
        setTimeout(function () {
            preloader.style.display = "none";
        }, 500)
    }, 500)
})

window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    let text_link = document.querySelectorAll(".nav-link");
    let navbar_brand = document.querySelector(".navbar-brand img");
    if (window.scrollY > 130) {
        navbar.classList.add("position-fixed", "nav-background", "text-dark")
        text_link.forEach(link => {
            link.classList.remove("text-white");
        })
        navbar_brand.setAttribute("src", "IMG\\img-tech\\IMAGENS\\logo-black.png")
    } else {
        navbar.classList.remove("position-fixed", "nav-background");
        text_link.forEach(link => {
            link.classList.add("text-white");
        })
        navbar_brand.removeAttribute("src");
        navbar_brand.setAttribute("src", "IMG\\img-tech\\IMAGENS\\logo.png")
    }
})

let btn = document.querySelectorAll(".btn");
btn.forEach(btn => {
    btn.onmousemove = function (e) {
        let x = e.pageX - btn.offsetLeft;
        let y = e.pageY - btn.offsetTop;

        btn.style.setProperty("--eixoX", x + "px");
        btn.style.setProperty("--eixoY", y + "px");
    }
})

let media_icons = document.querySelectorAll(".team-media-icons");
let team_image = document.querySelectorAll(".team .card .image-container img");
let index;
media_icons.forEach(media => {

    media.onmouseover = function () {
        for (let i = 0; i < media_icons.length; i++) {
            if (media == media_icons[i]) {
                index = i;
            }
        }
        team_image[index].classList.add("incrise-image");
    }
    media.onmouseout = function () {
        team_image[index].classList.remove("incrise-image");
    }
})

let portfolio_buttons = document.querySelectorAll(".portfolio-buttons .btn");
let portfolio_images = document.querySelectorAll(".portfolio-images div");

for (let i = 0; i < portfolio_buttons.length; i++) {
    portfolio_buttons[i].addEventListener("click", function (e) {
        e.preventDefault();
        portfolio_buttons.forEach(p => {
            p.classList.remove("active");
        })
        portfolio_buttons[i].classList.add("active");
        let dataAtribute = portfolio_buttons[i].getAttribute("data-btn");
        portfolio_images.forEach(img => {
            if (img.getAttribute("data-img") == dataAtribute || dataAtribute == "0") {
                img.style.display = "block"
            } else {
                img.style.display = "none"
            }
        })
    })
}

const counters = document.querySelectorAll(".counter-section .container .contar");
const container = document.querySelector(".counter-section");
let activated = false;

window.addEventListener("scroll", () => {
    if(pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated === false){
        counters.forEach(counter => {
            counter.innerText = 0;
            let count = 0;

            function updateCount(){
                const target = parseInt(counter.dataset.valor);
                if(count < target){
                    count++;
                    counter.innerText = count;
                    setTimeout(updateCount,10);
                }else{
                    counter.innerText = target;
                }
            }
            updateCount();
            activated = true;
        })
    }
})