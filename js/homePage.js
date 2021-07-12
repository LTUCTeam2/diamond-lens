'use strict'


//=============================== Consts ===============

//=============================== buttons IDs=========

const bt1 = document.getElementById('btn1');
const bt2 = document.getElementById('btn2');
const bt3 = document.getElementById('btn3');
const bt4 = document.getElementById('btn4');


bt1.addEventListener('click', handler);
bt2.addEventListener('click', handler);
bt3.addEventListener('click', handler);
bt4.addEventListener('click', handler);

//===== Packages ====

const p1 = document.getElementById('package1');
const p2 = document.getElementById('package2');
// const p3 = document.getElementById('package3');
// const p4 = document.getElementById('package4');




//======== block 1
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


//==== block 2==== 
const leftImageSecond = document.getElementById('left-image_second');
const middleImageSecond = document.getElementById('middle-image_second');
const rightImageSecond = document.getElementById('right-image_second');

const contentDescSecond1 = document.getElementById('ContentDesc_Second1');
const contentTitleSecond1 = document.getElementById('ContentTitle_Second1');

const contentDescSecond2 = document.getElementById('ContentDesc_Second2');
const contentTitleSecond2 = document.getElementById('ContentTitle_Second2');

const contentDescSecond3 = document.getElementById('ContentDesc_Second3');
const contentTitleSecond3 = document.getElementById('ContentTitle_Second3');


let pack3;
let pack4;




//================================= Constructor =========

function Content(packagePrice, packageName, camerName, camerSource, cameraTitle, cameraDescription, 
  lensName, lensSource, lensTitle, lensDescription, micName, micSource, micTitle, micDescription, brand) {
  this.packagePrice=packagePrice;
  this.packageName = packageName;

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

  this.brand = brand;

  Content.contentArray.push(this);
}
//========================= Objects Array ===============
Content.contentArray = [];
//========================== Created Objects =============

new Content('5000','canon 1','canon',
  '../images/InnerColumn_images/canon.png',
  'DSLR', 'EOS Rebel T8i EF-S 18-55mm IS STM Lens Kit',
  'l1', '../images/InnerColumn_images/l1.png',
  'Macro', 'RF100mm F2.8 L MACRO IS USM',
  'mic', '../images/InnerColumn_images/mic.gif',
  'Microphone', 'Directional Microphone DM-E1', 'canon');

new Content('5300','canon 2','canon2', '../images/InnerColumn_images/canon2.png', 'DSLR', 'EOS RP RF24-105mm F4-7.1 IS STM Lens Kit',
  'l2', '../images/InnerColumn_images/l2.png', 'Telephoto Zoom', 'RF70-200mm F4 L IS USM',
  'mic2', '../images/InnerColumn_images/mic2.png', 'Microphone', 'Stereo Microphone DME100', 'canon');



new Content('4900','sony 1','sony',
  '../images/InnerColumn_images/sony1.webp',
  'DSLR', 'EOS Rebel T8i EF-S 18-55mm IS STM Lens Kit',
  'l1', '../images/InnerColumn_images/l1.png',
  'Macro', 'RF100mm F2.8 L MACRO IS USM',
  'mic', '../images/InnerColumn_images/mic.gif',
  'Microphone', 'Directional Microphone DM-E1', 'sony');
  

new Content('8400','sony 2','sony2', '../images/InnerColumn_images/canon2.png', 'DSLR', 'EOS RP RF24-105mm F4-7.1 IS STM Lens Kit',
  'l2', '../images/InnerColumn_images/l2.png', 'Telephoto Zoom', 'RF70-200mm F4 L IS USM',
  'mic2', '../images/InnerColumn_images/mic2.png', 'Microphone', 'Stereo Microphone DME100', 'sony');



// console.log(Content.contentArray);


//====================================== Random Number Generator Function====================
function generateRandomIndexNumber() {
  let rand = Math.floor(Math.random() * Content.contentArray.length);
  return rand;
}
//========================= Render Function ================
function renderContent() {
  //=======0        1            2          3
  while ((pack1 === pack2 || pack3 === pack4 || pack1 === pack3 || pack1 === pack4 || pack2 === pack3 || pack2 === pack4)) {

    pack1 = generateRandomIndexNumber();
    pack2 = generateRandomIndexNumber();
    pack3 = generateRandomIndexNumber();
    pack4 = generateRandomIndexNumber();

    console.log(pack1, pack2, pack3, pack4)
  }
  console.log(Content.contentArray[0].brand);
  if (Content.contentArray[0].brand === 'canon') {
    console.log(Content.contentArray);
    console.log(Content.contentArray[pack3].cameraDescription);
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

    p1.innerHTML=Content.contentArray[pack1].packagePrice;
  

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

    p1.innerHTML=Content.contentArray[pack2].packagePrice;
    

  }
  if (Content.contentArray[2].brand === 'sony') {
    //=========================================================================== First Case Sony ==================
    leftImageSecond.src = Content.contentArray[pack3].camerSource;
    middleImageSecond.src = Content.contentArray[pack3].lensSource;
    rightImageSecond.src = Content.contentArray[pack3].micSource;

    leftImageSecond.alt = Content.contentArray[pack3].camerName;
    middleImageSecond.alt = Content.contentArray[pack3].lensName;
    rightImageSecond.alt = Content.contentArray[pack3].micName;

    contentDescSecond1.innerHTML = Content.contentArray[pack3].cameraDescription;
    contentDescSecond2.innerHTML = Content.contentArray[pack3].lensDescription;
    contentDescSecond3.innerHTML = Content.contentArray[pack3].micDescription;

    contentTitleSecond1.innerHTML = Content.contentArray[pack3].cameraTitle;
    contentTitleSecond2.innerHTML = Content.contentArray[pack3].lensTitle;
    contentTitleSecond3.innerHTML = Content.contentArray[pack3].micTitle;


    p2.innerHTML=Content.contentArray[pack3].packagePrice;

    //=========================================================================== Second Case Sony ==================
    leftImageSecond.src = Content.contentArray[pack4].camerSource;
    middleImageSecond.src = Content.contentArray[pack4].lensSource;
    rightImageSecond.src = Content.contentArray[pack4].micSource;

    leftImageSecond.alt = Content.contentArray[pack4].camerName;
    middleImageSecond.alt = Content.contentArray[pack4].lensName;
    rightImageSecond.alt = Content.contentArray[pack4].micName;

    contentDescSecond1.innerHTML = Content.contentArray[pack4].cameraDescription;
    contentDescSecond2.innerHTML = Content.contentArray[pack4].lensDescription;
    contentDescSecond3.innerHTML = Content.contentArray[pack4].micDescription;

    contentTitleSecond1.innerHTML = Content.contentArray[pack4].cameraTitle;
    contentTitleSecond2.innerHTML = Content.contentArray[pack4].lensTitle;
    contentTitleSecond3.innerHTML = Content.contentArray[pack4].micTitle;

    p2.innerHTML=Content.contentArray[pack4].packagePrice;
  }
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



function handler(event) {

  if(event.target.id === 'bt1')

  {

  }else if(event.target.id === 'bt2')
  {

  }

  else if(event.target.id === 'bt3'){
      // from html
  }
  else if(event.target.id === 'bt4')
  {
       // from html
  }

  saveInLocalStorage();
}


function saveInLocalStorage() {
  const converted_Content_Array = JSON.stringify(Content.contentArray);
  localStorage.setItem('MainPageContent', converted_Content_Array);
}