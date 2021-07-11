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
  if (getLocalStorage("incart") === null) {
    setLocalStorage("incart", 1);
    spanCartCounter.textContent = getLocalStorage("incart");
  } else {
    setLocalStorage("incart", getLocalStorage("incart") + 1);
    spanCartCounter.textContent = getLocalStorage("incart");
  }
}

// making constructor for Cart main
let Cartmaker = function (Name, model, Price) {
  this.Name = Name;
  this.model = model;
  this.Price = Price;
  Cartmaker.arrayOfObjects.push(this);
};

Cartmaker.arrayOfObjects = [];

// make constructor using array that will be used in the cart every argenamt have there one array
let arrayOfItemsName = ["sony", "red", "nicon", "canon"];
let arrayOfItemsModel = ["x", "xx", "xxx", "xxxx"];
let arrayOfItemsPrice = [100, 200, 300, 400];
let p = document.querySelectorAll(".myPrag");

// using for loop to make objects
for (let i = 0; i < arrayOfItemsName.length; i++) {
  new Cartmaker(
    arrayOfItemsName[i],
    arrayOfItemsModel[i],
    arrayOfItemsPrice[i]
  );
  p[i].textContent = `${arrayOfItemsName[i]}`;
  myBtn[i].setAttribute("id", `${arrayOfItemsName[i]}`);
}

// working with added event listener
for (let i = 0; i < myBtn.length; i++) {
  myBtn[i].addEventListener("click", cartCounterFunc);
}
// event listener function
function cartCounterFunc(e) {
  setContentForCart();
  cartChecker(e.target.id);
}
spanCartCounter.textContent = getLocalStorage("incart");
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