const header = document.getElementById("headerContainer");
const text = document.getElementsByClassName("header-text");
const menuHeader = document.getElementById("navbarOffcanvasLg");
const menuHeaderButton = document.getElementById("menuHeaderButton");



const size = document.getElementsByClassName("heroMainImage")[0].offsetHeight - 70;
const flowerContainer = document.getElementById('flower-container');

window.addEventListener("scroll", () => {
    if (window.scrollY > size) {
        header.classList.add("bg-light");
        for (let i = 0; i < text.length; i++) {
            text[i].classList.remove("text-light");
            text[i].classList.add("text-dark");
        }
    } else {
        header.classList.remove("bg-light");
        for (let i = 0; i < text.length; i++) {
            text[i].classList.remove("text-dark");
            text[i].classList.add("text-light");
        }
    }
});

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');

    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = (Math.random() * 2 + 3) + 's'; // Duración aleatoria entre 3 y 5 segundos

    flowerContainer.appendChild(flower);
    setTimeout(() => {
        flower.remove();
    }, 5000); 
}



window.addEventListener("resize", () => {
    if (window.innerWidth >= 990) {
        for (let i = 0; i < text.length - 3; i++) {
            if (text[i].classList.contains("text-dark")) {
                text[i].classList.remove("text-dark");
                text[i].classList.add("text-light");
            }
        }
    }
});
menuHeaderButton.addEventListener("click", () => {
    for (let i = 0; i < text.length - 3; i++) {
        if (text[i].classList.contains("text-light")) {
            text[i].classList.remove("text-light");
            text[i].classList.add("text-dark");
        }
    }
});

