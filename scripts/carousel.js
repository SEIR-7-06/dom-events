const carouselImage = document.getElementById('carousel-image');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;

const imageList = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
];

// Initialize Carousel with First Image
carouselImage.setAttribute('src', imageList[index]);


function handlePrevClick(event) {
  if (index > 0) {
    index--;
    carouselImage.setAttribute('src', imageList[index]);
  }
};

function handleNextClick(event) {
  index++;
  carouselImage.setAttribute('src', imageList[index]);
}


// Listen for Control Clicks
prev.addEventListener('click', handlePrevClick);
next.addEventListener('click', handleNextClick);
