"use strict";

function Cameras(Name, Model, Price, Img) {
  this.Name = Name;
  this.Model = Model;
  this.Price = Price;
  this.Img = Img;

  Cameras.arrayObj.push(this);
  // Cameras.Img.push(this);
}

Cameras.arrayObj = [];
Cameras.Img = [];
// console.log(Cameras.arrayObj);

let nameArray = [
  "Canon1",
  "Canon2",
  "Canon3",
  "Canon4",
  "Nikon1",
  "Nikon2",
  "Nikon3",
  "Nikon4",
  "Red1",
  "Red2",
  "Red3",
  "Red4",
  "Sony1",
  "Sony2",
  "Sony3",
  "Sony4",
];
let modelArray = [
  "Canon EOS-1D X",
  "Canon EOS 6D",
  "Canon EOS-1D",
  "Canon EOS R6",
  "Nikon W150",
  "Nikon P1000",
  "Nikon P950",
  "Nikon D7500",
  "Red DSMC2 Brain",
  "Red DSMC2",
  "Red KOMODO",
  "Red Ranger",
  "Sony Alpha A6400",
  "Sony RX100",
  "Sony DSCH300",
  "Sony Alpha A6100",
];
let priceArray = [
  "6499",
  "1399",
  "6499",
  "3599",
  "169.95",
  "999.95",
  "1027.96",
  "996.95",
  "54500",
  "6500",
  "5995",
  "59950",
  "898",
  "1298",
  "149.99",
  "848",
];

let myButton = document.getElementsByTagName("button");

//making objects using for loop:
for (let i = 0; i < myButton.length; i++) {
  let imgLinks = document.querySelectorAll(".camImage")[i].src;
  new Cameras(nameArray[i], modelArray[i], priceArray[i], imgLinks);
  myButton[i].setAttribute("id", modelArray[i]);
  myButton[i].addEventListener("click", handleClick);
  Cameras.arrayObj[i].Img = imgLinks;
}

// console.log(myButton);
// console.table(Cameras.arrayObj);

// let resetSpan = document.querySelector('spanClass');
// resetSpan.textContent = 0;
// console.log(resetSpan);

function updateCartNumbers() {
  let numOfClicks = localStorage.getItem("inCart");
  if (numOfClicks) {
    document.querySelector(".spanCartCounter").textContent = numOfClicks;
  }
}

let test;


function handleClick(event) {
  let numOfClicks = localStorage.getItem("inCart");
  numOfClicks = parseInt(numOfClicks);
  let constructorOfCameras = localStorage.setItem(
    "cam",
    JSON.stringify(Cameras.arrayObj)
  );
  
  if (numOfClicks) {
    localStorage.setItem("inCart", numOfClicks + 1);
    document.querySelector(".spanCartCounter").textContent = numOfClicks + 1;
  } else {
    localStorage.setItem("inCart", 1);
    document.querySelector(".spanCartCounter").textContent = 1;
  }
  // console.log(event.target.id);

  for (let i = 0; i < Cameras.arrayObj.length; i++) {
    if (modelArray[i] === event.target.id) {
      test = i;
    }
  }
  setLocalStorage();
  // console.table(Cameras.arrayObj);
  // console.log(Cameras.arrayObj[test]);
  // console.log(test);
}

updateCartNumbers();

// Cameras.prototype.inCart = 0;

console.log(Cameras.arrayObj);

function setLocalStorage() {
  if (getFromLocal() === null) {
    Cameras.arrayObj[test].inCart = 1;
    let newModel = JSON.stringify(Cameras.arrayObj[test]);
    newModel = localStorage.setItem(Cameras.arrayObj[test].Model, newModel);
    // let newImage = localStorage.setItem(Cameras.arrayObj[test].Img, newModel);
  } else {
    Cameras.arrayObj[test].inCart++;
    let newModel = JSON.stringify(Cameras.arrayObj[test]);
    newModel = localStorage.setItem(Cameras.arrayObj[test].Model, newModel);
    let newImage = localStorage.setItem(Cameras.arrayObj[test].Img, newModel);
  }
}

function getFromLocal() {
  return localStorage.getItem(Cameras.arrayObj[test].Model);
}
// localStorage.getItem(Cameras.arrayObj[test].Img);
// Cameras.prototype.newimagefortest = "hi";

// console.log(Cameras.Img);
// console.log(Cameras.Img[0]);
// console.log(Cameras.Img[i].ImageforCam);
