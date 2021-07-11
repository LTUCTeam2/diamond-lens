"use strict";

// makeing constractor for Cart main

let Cartmaker = function (Name, model, Price) {
  this.Name = Name;
  this.model = model;
  this.Price = Price;
  Cartmaker.arrayOfObjects.push(this);
};

Cartmaker.arrayOfObjects = [];

// console.table(Cartmaker.arrayOfObjects);

// make constructor using array that will be used in the cart every argenamt have there one array
let arrayOfItemsName = ["sony", "red", "nicon", "canon"];
let arrayOfItemsModel = ["x", "xx", "xxx", "xxxx"];
let arrayOfItemsPrice = [100, 200, 300, 400];
let p = document.querySelectorAll(".myPrag");
// console.log(p);
// using for loop to make objects
for (let i = 0; i < arrayOfItemsName.length; i++) {
  new Cartmaker(
    arrayOfItemsName[i],
    arrayOfItemsModel[i],
    arrayOfItemsPrice[i]
  );
  // p[i].textContent = `${arrayOfItemsName[i]}`;
  // p[i].setAttribute("class", `${arrayOfItemsName[i]}`);
}
// console.table(Cartmaker.arrayOfObjects);
const spanCartCounter = document.getElementById("cartCounter");
const myBtn = document.getElementsByTagName("button");
let i;
// console.log(myBtn);
for (i = 0; i < myBtn.length; i++) {
  myBtn[i].addEventListener("click", cartCounterFunc);
}

function cartCounterFunc(e) {
  console.log(e.target.value);
}