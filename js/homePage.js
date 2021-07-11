'use strict'


//=============================== Consts ===============
const leftImage = document.getElementById('left-image');
const middleImage = document.getElementById('middle-image');
const rightImage = document.getElementById('right-image');

const contentDesc1 = document.getElementById('ContentDesc1');
const contentTitle1 = document.getElementById('ContentTitle1');

const contentDesc2 = document.getElementById('ContentDesc2');
const contentTitle2 = document.getElementById('ContentTitle2');

const contentDesc3 = document.getElementById('ContentDesc3');
const contentTitle3 = document.getElementById('ContentTitle3');



let pack1;
let pack2;

// to do list :

// pack3
// pack4

// pack5
// pack6

// pack7
// pack8




//================================= Constructor =========

function Content(camerName, camerSource, cameraTitle, cameraDescription, lensName, lensSource, lensTitle, lensDescription, micName, micSource, micTitle, micDescription ,price, brand) {
  this.camerName = camerName;
  this.camerSource = camerSource;
  this.cameraTitle = cameraTitle;
  this.cameraDescription = cameraDescription;

  this.lensName = lensName;
  this.lensSource = lensSource;
  this.lensTitle = lensTitle;
  this.lensDescription = lensDescription;

  this.micName = micName;
  this.micSource = micSource;
  this.micTitle = micTitle;
  this.micDescription = micDescription;

  this.brand=brand;
  this.price=price;
  Content.contentArray.push(this);
}
//========================= Objects Array ===============
Content.contentArray = [];
//========================== Created Objects =============

new Content('canon', 
'../images/InnerColumn_images/canon.png', 
'DSLR', 'EOS Rebel T8i EF-S 18-55mm IS STM Lens Kit',
  'l1', '../images/InnerColumn_images/l1.png', 
  'Macro', 'RF100mm F2.8 L MACRO IS USM',
  'mic', '../images/InnerColumn_images/mic.gif', 
  'Microphone', 'Directional Microphone DM-E1','canon');


new Content('canon2', '../images/InnerColumn_images/canon2.png', 'DSLR', 'EOS RP RF24-105mm F4-7.1 IS STM Lens Kit',
  'l2', '../images/InnerColumn_images/l2.png', 'Telephoto Zoom', 'RF70-200mm F4 L IS USM',
  'mic2', '../images/InnerColumn_images/mic2.png', 'Microphone', 'Stereo Microphone DME100', 'canon');

console.log(Content.contentArray);


//====================================== Random Number Generator Function====================
function generateRandomIndexNumber() {
  let rand = Math.floor(Math.random() * Content.contentArray.length);
  return rand;
}
//========================= Render Function ================
function renderContent() {
  while (pack1 === pack2 ) {
    pack1 = generateRandomIndexNumber();
    pack2 = generateRandomIndexNumber();
  }
//=========================================================================== First Case Canon==================
  leftImage.src = Content.contentArray[pack1].camerSource;
  middleImage.src = Content.contentArray[pack1].lensSource;
  rightImage.src = Content.contentArray[pack1].micSource;

  leftImage.alt = Content.contentArray[pack1].camerName;
  middleImage.alt = Content.contentArray[pack1].lensName;
  rightImage.alt = Content.contentArray[pack1].micName;

  contentDesc1.innerHTML = Content.contentArray[pack1].cameraDescription;
  contentDesc2.innerHTML = Content.contentArray[pack1].lensDescription;
  contentDesc3.innerHTML = Content.contentArray[pack1].micDescription;

  contentTitle1.innerHTML = Content.contentArray[pack1].cameraTitle;
  contentTitle2.innerHTML = Content.contentArray[pack1].lensTitle;
  contentTitle3.innerHTML = Content.contentArray[pack1].micTitle;

  
//=========================================================================== Second Case Canon ==================
  leftImage.src = Content.contentArray[pack2].camerSource;
  middleImage.src = Content.contentArray[pack2].lensSource;
  rightImage.src = Content.contentArray[pack2].micSource;


  leftImage.alt = Content.contentArray[pack2].camerName;
  middleImage.alt = Content.contentArray[pack2].lensName;
  rightImage.alt = Content.contentArray[pack2].micName;

  contentDesc1.innerHTML = Content.contentArray[pack2].cameraDescription;
  contentDesc2.innerHTML = Content.contentArray[pack2].lensDescription;
  contentDesc3.innerHTML = Content.contentArray[pack2].micDescription;

  contentTitle1.innerHTML = Content.contentArray[pack2].cameraTitle;
  contentTitle2.innerHTML = Content.contentArray[pack2].lensTitle;
  contentTitle3.innerHTML = Content.contentArray[pack2].micTitle;

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
