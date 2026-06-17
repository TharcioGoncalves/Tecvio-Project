const cards_group = document.querySelector(".cards-group");
let cards = Array.from(cards_group.children);

const cardsPerView = window.innerWidth < 768 ? 1 : 3;
let indexC = cardsPerView;

for (let i = 0; i < cardsPerView; i++) {
    cards_group.appendChild(cards[i].cloneNode(true));
    cards_group.insertBefore(cards[cards.length - 1 - i].cloneNode(true), cards_group.firstChild);
}
cards = Array.from(cards_group.children);
const totalSlides = cards.length - (cardsPerView*2);

cards_group.style.transition = "none";
actualizarCarrossel();
cards_group.offsetHeight;
cards_group.style.transition = "transform 0.6s ease-in-out";

function actualizarCarrossel() {
    const offset = -(indexC * (100 / cardsPerView));
    cards_group.style.transform = `translateX(${offset}%)`;
}

function proximo() {
    if(index >= cards.length - cardsPerView){
        return;
    }
    indexC++;
    actualizarCarrossel();

    if (indexC >= cardsPerView + totalSlides) {
        setTimeout(() => {
            cards_group.style.transition = "none";
            indexC = cardsPerView;
            actualizarCarrossel();
            requestAnimationFrame(() => {
                cards_group.style.transition = "transform 0.6s ease-in-out";
            });
        }, 600)
    }
}

function anterior() {
    if(indexx <= 0){
        return;
    }
    indexC--;
    actualizarCarrossel();

    if (indexC <= 0) {
        setTimeout(() => {
            cards_group.style.transition = "none";
            indexC = cardsPerView + totalSlides - 1;
            actualizarCarrossel();
            requestAnimationFrame(() => {
                cards_group.style.transition = "transform 0.6s ease-in-out";
            });
        }, 600)
    }
}

let autoSlide = setInterval(proximo, 3000);

const carrossel = document.querySelector(".carrossel");
carrossel.addEventListener("mouseenter", () => clearInterval(autoSlide));
carrossel.addEventListener("mouseleave", () => autoSlide = setInterval(proximo, 3000));

actualizarCarrossel();