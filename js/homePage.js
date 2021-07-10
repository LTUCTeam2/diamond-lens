'use strict'

//=============================== Consts ===============
const imagesSection = document.getElementById('images-section');
const leftImage = document.getElementById('left-image');
const middleImage = document.getElementById('middle-image');
const rightImage = document.getElementById('right-image');

const contentDesc1= document.getElementById('ContentDesc1');
const contentTitle1= document.getElementById('ContentTitle1');

const contentDesc2= document.getElementById('ContentDesc2');
const contentTitle2= document.getElementById('ContentTitle2');

const contentDesc3= document.getElementById('ContentDesc3');
const contentTitle3= document.getElementById('ContentTitle3');



let leftImageIndex;
let rightImageIndex;
let middleImageIndex;

//================================= Constructor =========
function Content(name, sourcs, description, title) {
  this.name = name;
  this.sourcs = sourcs;
  this.description = description;
  this.title = title;
  Content.contentArray.push(this);
}
//========================= Objects Array ===============
Content.contentArray = [];
//========================== Created Objects =============
new Content('canon', '../images/InnerColumn_images/canon.png', 'DSLR', 'EOS Rebel T8i EF-S 18-55mm IS STM Lens Kit');
new Content('canon2', '../images/InnerColumn_images/canon2.png', 'DSLR', 'EOS RP RF24-105mm F4-7.1 IS STM Lens Kit');
new Content('mic', '../images/InnerColumn_images/mic.gif', 'Microphone', 'Directional Microphone DM-E1');
new Content('mic2', '../images/InnerColumn_images/mic2.png', 'Microphone', 'Stereo Microphone DME100');
new Content('l1', '../images/InnerColumn_images/l1.png', 'Macro', 'RF100mm F2.8 L MACRO IS USM');
new Content('l2', '../images/InnerColumn_images/l2.png', 'Telephoto Zoom', 'RF70-200mm F4 L IS USM');

console.log(Content.contentArray);
//====================================== Random Number Generator Function====================
function generateRandomIndexNumber() {
  return Math.floor(Math.random() * Content.contentArray.length);
}

//========================== Render Function ================

function renderContent() {
  while (leftImageIndex === middleImageIndex ||
    middleImageIndex === rightImageIndex ||
    leftImageIndex === rightImageIndex ) {

    
    leftImageIndex = generateRandomIndexNumber();
    middleImageIndex = generateRandomIndexNumber();
    rightImageIndex = generateRandomIndexNumber();

  }
  
  leftImage.src = Content.contentArray[leftImageIndex].sourcs;
  middleImage.src = Content.contentArray[middleImageIndex].sourcs;
  rightImage.src =Content.contentArray[rightImageIndex].sourcs;

  leftImage.alt = Content.contentArray[leftImageIndex].name;
  middleImage.alt = Content.contentArray[middleImageIndex].name;
  rightImage.alt = Content.contentArray[rightImageIndex].name;

  contentDesc1.innerHTML=Content.contentArray[leftImageIndex].description;
  contentDesc2.innerHTML=Content.contentArray[middleImageIndex].description;
  contentDesc3.innerHTML=Content.contentArray[rightImageIndex].description;

  contentTitle1.innerHTML=Content.contentArray[leftImageIndex].title;
  contentTitle2.innerHTML=Content.contentArray[middleImageIndex].title;
  contentTitle3.innerHTML=Content.contentArray[rightImageIndex].title;

}



//============================================= SlideShow Code================================

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
//==============================================================================================


// render function must be called after slider function to prevent a certain issue
renderContent();
