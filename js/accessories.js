/* eslint-disable quotes */
"use strict";

// get the span id to send the value to local storage
const spanCartCounter = document.querySelector(".spanCartCounter");

// get the value class of button
const myBtn = document.getElementsByTagName("button");

// function to set get ls
function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// function to set set ls
function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// function to textContent the cart number
function setContentForCart() {
  if (getLocalStorage("inCart") === null) {
    setLocalStorage("inCart", 1);
    spanCartCounter.textContent = getLocalStorage("inCart");
  } else {
    setLocalStorage("inCart", getLocalStorage("inCart") + 1);
    spanCartCounter.textContent = getLocalStorage("inCart");
  }
}

// making constructor for Cart main
let Cartmaker = function (Name, model, Price, img) {
  this.Name = Name;
  this.model = model;
  this.Price = Price;
  this.img = img;
  Cartmaker.arrayOfObjects.push(this);
};
let arrOfImg = [];
for (let i = 0; i < document.querySelectorAll(".MidImages").length; i++) {
  arrOfImg[i] = document.querySelectorAll(".MidImages")[i].src;
}
Cartmaker.arrayOfObjects = [];
console.log(arrOfImg);
// make constructor using array that will be used in the cart every argenamt have there one array
let arrayOfItemsName = [
  "POLAM-FOTO",
  "SonyLens",
  "Neewer",
  "SMALLRIG",
  `ULANZIU`,
  `Neewer `,
  `Poyinco`,
  `Tilta`,
  `Olympus`,
  `Tiffen`,
  `Topmener`,
  `ROCAPRAW `,
];
let arrayOfItemsModel = [
  "POLAM-FOTO 140 Centimeters ",
  `Wide Angle, Normal`,
  "Dimensions LxWxH",
  "Top Handle",
  `GripPro`,
  `Plastic 15 mm Rail Rods `,
  `Grip Camera`,
  `Mountings`,
  `Lens Coating `,
  `Filter Thread `,
  `Flex Clamp Mount `,
  `Action Cameras Head Mount `,
];
let arrayOfItemsPrice = [69, 200, 69, 150, 69, 50, 16, 17, 12, 299, 100, 89];
let p = document.querySelectorAll(".myPrag");

// using for loop to make objects
for (let i = 0; i < arrayOfItemsName.length; i++) {
  new Cartmaker(
    arrayOfItemsName[i],
    arrayOfItemsModel[i],
    arrayOfItemsPrice[i],
    arrOfImg[i]
  );
  p[i].textContent = `${arrayOfItemsName[i]}`;
  myBtn[i].setAttribute("id", `${arrayOfItemsName[i]}`);
}
console.log(Cartmaker.arrayOfObjects);
// working with added event listener
for (let i = 0; i < myBtn.length; i++) {
  myBtn[i].addEventListener("click", cartCounterFunc);
}
// event listener function
function cartCounterFunc(e) {
  localStorage.setItem("acces", JSON.stringify(Cartmaker.arrayOfObjects));
  setContentForCart();
  cartChecker(e.target.id);
}
spanCartCounter.textContent = getLocalStorage("inCart");
// function that get the index for the object
function objectGrader(id) {
  let num = Cartmaker.arrayOfObjects.findIndex((x) =>
    x.Name === id ? x : null
  );
  return num;
}

// function foo(x) {
//   for (let i = 0; i < Cartmaker.arrayOfObjects.length; i++) {
//     if (arrayOfItemsName[i] === x) {
//       return i;
//     }
//   }
// }

function cartChecker(id) {
  if (
    getLocalStorage(Cartmaker.arrayOfObjects[objectGrader(id)].Name) === null
  ) {
    Cartmaker.arrayOfObjects[objectGrader(id)].inCart = 1;
    setLocalStorage(
      Cartmaker.arrayOfObjects[objectGrader(id)].Name,
      Cartmaker.arrayOfObjects[objectGrader(id)]
    );
  } else {
    Cartmaker.arrayOfObjects[objectGrader(id)].inCart++;
    setLocalStorage(
      Cartmaker.arrayOfObjects[objectGrader(id)].Name,
      Cartmaker.arrayOfObjects[objectGrader(id)]
    );
  }
}
localStorage.setItem("acces", JSON.stringify(Cartmaker.arrayOfObjects));
