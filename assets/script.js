var current_index = 0;
var folder_image = "./assets/images/slideshow/";

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Declaration de Variable dont la valeur ne change pas = cons
const arrowright = document.querySelector(".arrow_right");
const arrowleft = document.querySelector(".arrow_left");
const dots_div = document.querySelector(".dots");
const bannerimg = document.querySelector(".banner-img");
const bannertext = document.querySelector(".banner-text");
const updateSlider = () => {
    let slide_to_show = slides[current_index];
	bannerimg.src = folder_image + slide_to_show.image;
	bannertext.innerHTML =slide_to_show.tagLine;
	let dots=document.querySelectorAll(".dot");
	for (i = 0; i < dots.length; ++i) {
		if(current_index == i){
			dots[i].classList.add("dot_selected");
		}
		else {
			dots[i].classList.remove("dot_selected");
		}
	  }
};


// Fleche Droite 
arrowright.addEventListener('click', function () {
	current_index++;
	if (current_index > slides.length-1) {
		current_index = 0;
	}

	updateSlider();
});


// Fleche Gauche
arrowleft.addEventListener('click', function () {
	current_index--;
	if (current_index < 0) {
		current_index = slides.length-1;
	}
	updateSlider();
});

// creation des dots en fonction du nombre de slide
slides.forEach(function (slide) {
	dots_div.innerHTML += '<span class="dot"></span>';
});

var dots = document.getElementsByClassName('dot');
var first_dot = dots[0];
first_dot.classList.add('dot_selected');




