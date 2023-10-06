const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// création des variables pour selectionner les élements du DOM

let dotsContainer = document.querySelector(".dots");
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");
let bannerImg = document.querySelector(".banner-img");
let bannerTxt = document.querySelector("#banner p");
let slidesNumber = slides.length;
let index = 0;

// ajout du nombre de points en fonction du nombre d'images dans le tableau

for (i = 0; i < slidesNumber; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dotsContainer.appendChild(dot);
}

// ajout des event listeners sur les fleches de navigation

arrowLeft.addEventListener("click", () => {
  if (index === 0) {
    index = slidesNumber - 1;
  } else {
    index--;
  }
  showCurrentSlide();
  dotUpdate();
});

arrowRight.addEventListener("click", () => {
  if (index === slidesNumber - 1) {
    index = 0;
  } else {
    index++;
  }
  showCurrentSlide();
  dotUpdate();
});

// fonction qui va ajouter ou retirer la classe dot_selected

function dotUpdate() {
  let dotList = document.querySelectorAll(".dot");

  for (let dotIndex = 0; dotIndex < dotList.length; dotIndex++) {
    let currentDot = dotList[dotIndex];

    if (dotIndex === index) {
      currentDot.classList.add("dot_selected");
    } else {
      currentDot.classList.remove("dot_selected");
    }
  }
}

dotUpdate();

// fonction qui met à jour le contenu de la banniere (image et texte)

function showCurrentSlide() {
  bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
  bannerTxt.innerHTML = `${slides[index].tagLine}`;
}
