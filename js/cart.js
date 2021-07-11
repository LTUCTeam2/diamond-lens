/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
"use strict";
// get the span id to send the value to local storage

// function to set get ls
function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
let containerForCartPage = document.querySelectorAll(".a");
// function to set set ls
function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
let arrayOfLocalStorage = [];
const spanCartCounter = document.querySelector(".spanCartCounter");
const main = document.querySelector("#main");

spanCartCounter.textContent = getLocalStorage("incart");

const constructorFromAccessJsFile = getLocalStorage("acces");
let test = [];
let counter = 0;
function cartKeysChecker() {
  for (let i = 0; i < constructorFromAccessJsFile.length; i++) {
    if (getLocalStorage(constructorFromAccessJsFile[i].Name) !== null) {
      arrayOfLocalStorage[i] = getLocalStorage(
        constructorFromAccessJsFile[i].Name
      );
      //   console.log("i", i);
      //   let a = document.createElement("div");
      //     a.setAttribute("class", "a");
      //     a.setAttribute("class", "spanCartCounter");
      test = [];
      test.push(arrayOfLocalStorage[i].Name);
      test.push(arrayOfLocalStorage[i].model);
      test.push(arrayOfLocalStorage[i].Price);
      test.push(arrayOfLocalStorage[i].inCart);
      test.push(arrayOfLocalStorage[i].Price * arrayOfLocalStorage[i].inCart);
      let section = document.createElement("section");
      section.setAttribute("class", `${arrayOfLocalStorage[i].model}`);
      let hr = document.createElement("hr");
      main.appendChild(hr);
      main.appendChild(section);
      for (let j = 0; j < test.length; j++) {
        containerForCartPage = document.querySelectorAll(".a");
        console.log("j", j);
        console.log("counter", counter);
        let a = document.createElement("div");
        a.setAttribute("class", "containerForCartPage a");
        section.appendChild(a);
        console.log(test[j]);
        console.log(containerForCartPage);
        containerForCartPage[counter].textContent = test[j];
        counter++;
      }
    }
  }
}
cartKeysChecker();

//   test = arrayOfLocalStorage.map((x) => x.Name);
//   test1 = arrayOfLocalStorage.map((x) => x.model);
//   test2 = arrayOfLocalStorage.map((x) => x.Price);
