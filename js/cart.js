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

spanCartCounter.textContent = getLocalStorage("inCart");

const constructorFromAccessJsFile = getLocalStorage("acces");
// ======== remove button
function remove(id, model) {
  let deleteButton = document.createElement("Button");
  deleteButton.setAttribute("class", id);
  let sec = document.querySelector(`.${id}`);
  sec.appendChild(deleteButton);
  deleteButton.textContent = "X";
  deleteButton.addEventListener("click", () => {
    // main.removeChild(sec);
    sec.remove();
    localStorage.removeItem(model);
    // sec.style.display = "none";
  });
}
//  end of remove button
// ======== first function for accsse page

let accessQmultiplyPArray = [];
let accessQmultiplyP;

let test = [];
let counter = 0;
function cartKeysChecker() {
  if (constructorFromAccessJsFile !== null) {
    for (let i = 0; i < constructorFromAccessJsFile.length; i++) {
      if (getLocalStorage(constructorFromAccessJsFile[i].Name) !== null) {
        arrayOfLocalStorage[i] = getLocalStorage(
          constructorFromAccessJsFile[i].Name
        );
        test = [];
        test.push(arrayOfLocalStorage[i].Name);
        test.push(arrayOfLocalStorage[i].model);
        test.push(arrayOfLocalStorage[i].Price);
        test.push(arrayOfLocalStorage[i].inCart);

        accessQmultiplyP =
          arrayOfLocalStorage[i].Price * arrayOfLocalStorage[i].inCart;
        test.push(accessQmultiplyP);
        accessQmultiplyPArray.push(accessQmultiplyP);

        let section = document.createElement("section");
        section.setAttribute("class", `${arrayOfLocalStorage[i].model}`);
        let hr = document.createElement("hr");
        main.appendChild(hr);
        main.appendChild(section);
        remove(`${arrayOfLocalStorage[i].model}`, arrayOfLocalStorage[i].Name);

        for (let j = 0; j < test.length; j++) {
          let a = document.createElement("div");
          a.setAttribute("class", "containerForCartPage a");
          section.appendChild(a);
          containerForCartPage = document.querySelectorAll(".a");
          console.log(containerForCartPage[counter]);

          containerForCartPage[counter].textContent = test[j];
          counter++;
        }
      }
    }
  }
}

//   test = arrayOfLocalStorage.map((x) => x.Name);
//   test1 = arrayOfLocalStorage.map((x) => x.model);
//   test2 = arrayOfLocalStorage.map((x) => x.Price);

let camQmultiplyPArray = [];
let camQmultiplyP;
const cam = getLocalStorage("cam");
function camRender() {
  if (cam !== null) {
    for (let i = 0; i < cam.length; i++) {
      if (getLocalStorage(cam[i].Model) !== null) {
        let abc = getLocalStorage(cam[i].Model);
        let abcArray = [];
        abcArray.push(abc.Name);
        abcArray.push(abc.Model);
        abcArray.push(abc.Price);
        abcArray.push(abc.inCart);
        camQmultiplyP = abc.inCart * abc.Price;
        abcArray.push(camQmultiplyP);
        camQmultiplyPArray.push(camQmultiplyP);

        // console.log('total price of cameras products:', camQmultiplyP);

        let camSection = document.createElement("section");
        camSection.setAttribute("class", `${cam[i].Name}`);
        let hr = document.createElement("hr");
        main.appendChild(hr);
        main.appendChild(camSection);
        remove(`${cam[i].Name}`, cam[i].Model);
        for (let j = 0; j < abcArray.length; j++) {
          let camDiv = document.createElement("div");
          camDiv.setAttribute("class", "containerForCartPage a");
          camSection.appendChild(camDiv);
          containerForCartPage = document.querySelectorAll(".a");
          containerForCartPage[counter].textContent = abcArray[j];
          counter++;
        }
        // console.log(i);

        // console.log(abc);
      }

      // console.log(getLocalStorage(cam[i].Model));
      // console.log(getLocalStorage(cam[i].Model) !== null);
    }
  }
}

function add(accumulator, a) {
  return accumulator + a;
}

let mainQmultiplyPArray = [];
let fixedQmultiplyPArray = [];
function totalSection() {
  console.log(mainQmultiplyPArray);
  console.log(fixedQmultiplyPArray);
  camQmultiplyP = camQmultiplyPArray.reduce(add, 0);

  accessQmultiplyP = accessQmultiplyPArray.reduce(add, 0);
  console.log("cam", camQmultiplyP);
  console.log("access", accessQmultiplyP);
  let red = addForArrays(mainQmultiplyPArray);

  let red2 = addForArrays(fixedQmultiplyPArray);
  console.log("main", mainQmultiplyPArray);
  console.log("fixed", red2);
  let sumCamandAccess = camQmultiplyP + accessQmultiplyP + red + red2;
  console.log(red);
  console.log(red + red2);
  let sectionForTotal = document.createElement("section");
  sectionForTotal.setAttribute("id", "sectionForTotal");
  main.appendChild(sectionForTotal);
  sectionForTotal.textContent = `Total Price: ${sumCamandAccess}`;
}

function addForArrays(array) {
  let addVar = 0;
  for (let i = 0; i < array.length; i++) {
    addVar += array[i];
  }
  return addVar;
}

// let totalPriceCamAndAccess = 0;
// for (let i = 0; i < camQmultiplyPArray.length; i++) {
//     totalPriceCamAndAccess += camQmultiplyPArray[i];
//         console.log(camQmultiplyPArray);
//   }

// console.log(totalPriceCamAndAccess);
// let abc = getLocalStorage('Canon EOS 6D');

// console.log(containerForCartPage);
// console.log(typeof(containerForCartPage));

// totalPriceCamAndAccess = camQmultiplyP + accessTotal;

const mainConstructor = getLocalStorage("MainPageContent");
let mainArray = [];
let arrayOfProperty = [];
let arrayOfPropertyNames = [];

console.log(mainArray);
console.log("lastArra", arrayOfProperty);
function cartKeysForMAinPage() {
  if (mainConstructor !== null) {
    for (let i = 0; i < mainConstructor.length; i++) {
      if (getLocalStorage(mainConstructor[i].packagePrice) !== null) {
        mainArray = getLocalStorage(mainConstructor[i].packagePrice);

        arrayOfProperty = [];
        arrayOfPropertyNames = [];
        // ================================================================
        arrayOfProperty.push(mainArray.packageName);
        arrayOfProperty.push(mainArray.packagePrice);
        arrayOfProperty.push(1);
        arrayOfProperty.push(Number.parseInt(mainArray.packagePrice));
        // ================================================================
        arrayOfPropertyNames.push(mainArray.cameraName);
        arrayOfPropertyNames.push(mainArray.lensDescription);
        arrayOfPropertyNames.push(mainArray.micDescription);
        mainQmultiplyPArray.push(
          Number.parseInt(mainArray.packagePrice)
        ) /* * arrayOfLocalStorage[i].inCart*/;
        let section = document.createElement("section");
        section.setAttribute("class", `n${mainArray.packagePrice}`);
        let hr = document.createElement("hr");
        main.appendChild(hr);
        main.appendChild(section);
        remove(`n${mainArray.packagePrice}`, mainArray.packagePrice);

        for (let j = 0; j < 5; j++) {
          let a = document.createElement("div");
          a.setAttribute("class", "containerForCartPage a");
          section.appendChild(a);
          containerForCartPage = document.querySelectorAll(".a");
          if (j === 1) {
            a.setAttribute("id", mainConstructor[i].packageName);
            divsMaker(mainConstructor[i].packageName, arrayOfPropertyNames);
          } else {
            containerForCartPage[counter].textContent = arrayOfProperty[j];
          }

          counter++;
        }
      }
    }
  }
}
let arrayForFix = ["Red Pack", 40000, 1, 40000];
let arrayForFix2 = ["nikon Pack", 20000, 1, 20000];
let arrayForFixModel1 = [
  `MONSTRO 8K VV`,
  `DSMC2 ULTRA-BRITE`,
  `DSMC2 V-LOCK I/O EXPANDER`,
];
let arrayForFixModel2 = [
  `Nikon D6 Single-lens reflex digital camera`,
  `AF-S DX NIKKOR 10-24mm F3.5-4.5G ED`,
  `MH-26a Battery Charger`,
];

let fixed = getLocalStorage(`40000`);
let fixed2 = getLocalStorage(`20000`);
function fixedPacks() {
  if (fixed !== null || fixed2 !== null) {
    if (fixed !== null) {
      let fixedSection = document.createElement("section");
      fixedSection.setAttribute("id", "sectionForFixed");
      main.appendChild(fixedSection);
      fixedQmultiplyPArray.push(Number.parseInt(fixed));
      for (let i = 0; i < 5; i++) {
        let camDiv = document.createElement("div");
        camDiv.setAttribute("class", "containerForCartPage a");
        fixedSection.appendChild(camDiv);
        containerForCartPage = document.querySelectorAll(".a");
        if (i === 1) {
          camDiv.setAttribute("id", `redPack`);
          divsMaker(`redPack`, arrayForFixModel1);
        } else {
          containerForCartPage[counter].textContent = arrayForFix[i];
        }
        counter++;
      }
      let hr = document.createElement("hr");
      main.appendChild(hr);
      main.appendChild(fixedSection);
      fixedSection.setAttribute("class", "sectionForFixedcls");

      remove(`sectionForFixedcls`, fixed);
    }
  }
  if (fixed2 !== null) {
    let fixedSection = document.createElement("section");
    fixedSection.setAttribute("id", "sectionForFixed2");
    main.appendChild(fixedSection);
    fixedQmultiplyPArray.push(Number.parseInt(fixed2));
    for (let i = 0; i < 5; i++) {
      let camDiv = document.createElement("div");
      camDiv.setAttribute("class", "containerForCartPage a");
      fixedSection.appendChild(camDiv);
      containerForCartPage = document.querySelectorAll(".a");
      if (i === 1) {
        camDiv.setAttribute("id", `nikonPack`);
        divsMaker(`nikonPack`, arrayForFixModel2);
      } else {
        containerForCartPage[counter].textContent = arrayForFix2[i];
      }
      counter++;
    }

    let hr = document.createElement("hr");
    main.appendChild(hr);
    main.appendChild(fixedSection);
    fixedSection.setAttribute("class", "sectionForFixed2cls");
    remove(`sectionForFixed2cls`, fixed2);
  }
}

fixedPacks();
cartKeysForMAinPage();
camRender();
cartKeysChecker();
function divsMaker(id, arrayOfPropertyNames) {
  for (let i = 0; i < arrayOfPropertyNames.length; i++) {
    let ida = document.getElementById(id);
    let divsForPacks = document.createElement("div");
    divsForPacks.setAttribute("class", `model`);
    ida.appendChild(divsForPacks);
    divsForPacks.textContent = arrayOfPropertyNames[i];
  }
}
totalSection();
