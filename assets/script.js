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
]

const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
// const dots = document.querySelectorAll('.dot');
const p = document.querySelector('#banner p')
const slidesLength = slides.length
const dotsContainer = document.querySelector('.dots')

let index = 0;

function dotsGenerator () {
	for (let i = 0; i < slidesLength; i++) {
		console.log(i)
		const spanDot = document.createElement('span')
		spanDot.classList.add('dot')
		dotsContainer.appendChild(spanDot)
		if (i === 0){
			spanDot.classList.add('dot_selected')
		}
	}
}
dotsGenerator()

arrowLeft.addEventListener('click', function (event) { 
	console.log (event)
    index = (index - 1 + slidesLength) % slidesLength;
    Carousel();
    // Dots(index); 
});


arrowRight.addEventListener('click', function (event) {
    index = (index + 1) % slidesLength;
    Carousel();
    // Dots(index); 
});

function Carousel() {
	const imagePath = `assets/images/slideshow/${slides[index].image}`;
bannerImg.alt = `slide ${index + 1}` 
bannerImg.src = imagePath;

const tagLine = slides[index].tagLine;
    p.innerHTML = tagLine;
	
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot,indexDot) => {
		if(indexDot === index){
			dot.classList.add('dot_selected')
		}else{
			dot.classList.remove('dot_selected')
		}
	})
}



// Carousel(index, 'démarrage');