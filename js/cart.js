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
const main = document.querySelector("#main");

let spanCartCounter = document.querySelector(".spanCartCounter");
spanCartCounter.textContent = getLocalStorage("inCart");

const constructorFromAccessJsFile = getLocalStorage("acces");
// ======== remove button
let del = 0;
function remove(id, model) {
  let deleteButton = document.createElement("Button");
  deleteButton.setAttribute("class", id);
  let sec = document.querySelector(`.${id}`);
  let hr = document.querySelector(`.${id}+hr`);
  console.log(sec);
  sec.appendChild(deleteButton);
  deleteButton.textContent = "X";
  let addForPrices = 0;
  del = totalSection();
  deleteButton.addEventListener("click", (e) => {
    localStorage.removeItem(model);
    console.log(hr);
    console.log(`.${e.target.classList[0]}`);
    console.log(
      document.querySelector(`.${e.target.classList[0]}div:nth-child(5)`)
    );
    let priceThatGotRendered = document.querySelector(
      `.${e.target.classList[0]} div:nth-child(5)`
    ).textContent;
    let qun = document.querySelector(
      `.${e.target.classList[0]} div:nth-child(4)`
    ).textContent;
    sec.remove();
    hr.remove();
    console.log(priceThatGotRendered);
    addForPrices = Number.parseInt(priceThatGotRendered);
    del = del - addForPrices;

    document.getElementById("sectionForTotal").remove();
    renderForTotal(Math.trunc(del));
    let incart = getLocalStorage("inCart");
    setLocalStorage("inCart", incart - Number.parseInt(qun));
    console.log(spanCartCounter);
    spanCartCounter.textContent = getLocalStorage("inCart");

    // sec.style.display = "none";
  });
}
//  end of remove button
// ======== first function for accsse page

let accessQmultiplyPArray = [];
let accessQmultiplyP;
console.log();
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
        section.setAttribute("class", `${arrayOfLocalStorage[i].Name}`);
        let hr = document.createElement("hr");

        main.appendChild(section);

        for (let j = 0; j < test.length; j++) {
          let a = document.createElement("div");
          a.setAttribute("class", "containerForCartPage a");
          section.appendChild(a);
          containerForCartPage = document.querySelectorAll(".a");
          if (j === 0) {
            let img = document.createElement("img");
            img.setAttribute("class", "img");
            img.src = arrayOfLocalStorage[i].img;
            a.appendChild(img);
            containerForCartPage[counter].textContent = test[j];
            console.log(a.appendChild(img));
          } else {
            containerForCartPage[counter].textContent = test[j];
          }
          counter++;
        }
        main.appendChild(hr);
        remove(`${arrayOfLocalStorage[i].Name}`, arrayOfLocalStorage[i].Name);
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
        main.appendChild(camSection);
        for (let j = 0; j < abcArray.length; j++) {
          let camDiv = document.createElement("div");
          camDiv.setAttribute("class", "containerForCartPage a");
          camSection.appendChild(camDiv);
          containerForCartPage = document.querySelectorAll(".a");
          if (j === 0) {
            let img = document.createElement("img");
            img.setAttribute("class", "img");
            img.src = cam[i].Img;
            containerForCartPage[counter].textContent = abcArray[j];
            camDiv.appendChild(img);
          } else {
            containerForCartPage[counter].textContent = abcArray[j];
          }
          counter++;
        }
        main.appendChild(hr);
        remove(`${cam[i].Name}`, cam[i].Model);
      }
    }
  }
}

function add(accumulator, a) {
  return accumulator + a;
}

let mainQmultiplyPArray = [];
let fixedQmultiplyPArray = [];
function totalSection() {
  camQmultiplyP = camQmultiplyPArray.reduce(add, 0);
  accessQmultiplyP = accessQmultiplyPArray.reduce(add, 0);
  console.log("main", mainQmultiplyPArray);
  console.log("fixed", fixedQmultiplyPArray);

  let red = addForArrays(mainQmultiplyPArray);
  let red2 = addForArrays(fixedQmultiplyPArray);
  console.log("red", red);
  console.log("red2", red2);
  let sumCamandAccess = camQmultiplyP + accessQmultiplyP + red + red2;
  return sumCamandAccess;
}
function renderForTotal(sumCamandAccess) {
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

console.log(mainConstructor);
function cartKeysForMAinPage() {
  if (mainConstructor !== null) {
    for (let i = 0; i < mainConstructor.length; i++) {
      if (getLocalStorage(mainConstructor[i].packagePrice) !== null) {
        mainArray = getLocalStorage(mainConstructor[i].packagePrice);

        arrayOfProperty = [];
        arrayOfPropertyNames = [];
        // ================================================================
        arrayOfProperty.push(mainArray.packageName);
        arrayOfProperty.push("");
        arrayOfProperty.push(mainArray.packagePrice);
        arrayOfProperty.push(mainArray.inCart);
        console.log(mainArray.inCart);
        arrayOfProperty.push(
          Number.parseInt(mainArray.packagePrice) * mainArray.inCart
        );
        // ================================================================
        arrayOfPropertyNames.push(mainArray.cameraName);
        arrayOfPropertyNames.push(mainArray.lensDescription);
        arrayOfPropertyNames.push(mainArray.micDescription);
        mainQmultiplyPArray.push(
          Number.parseInt(mainArray.packagePrice) *
            Number.parseInt(mainArray.inCart)
        );
        console.log(mainQmultiplyPArray);
        let section = document.createElement("section");
        section.setAttribute("class", `n${mainArray.packagePrice}`);
        let hr = document.createElement("hr");

        main.appendChild(section);

        for (let j = 0; j < 5; j++) {
          let a = document.createElement("div");
          a.setAttribute("class", "containerForCartPage a");
          section.appendChild(a);
          containerForCartPage = document.querySelectorAll(".a");
          if (j === 1) {
            a.setAttribute("id", mainConstructor[i].packageName);
            divsMaker(mainConstructor[i].packageName, arrayOfPropertyNames);
          } else if (j === 0) {
            let img = document.createElement("img");
            img.setAttribute("class", "img");

            console.log(Number.parseInt(mainArray.packagePrice) === 5000);
            if (Number.parseInt(mainArray.packagePrice) === 5000) {
              img.src = `../cartimg/c5000.PNG`;
            } else if (Number.parseInt(mainArray.packagePrice) === 4900) {
              img.src = "../cartimg/s4900.PNG";
              console.log("../cartimg/c5000.PNG");
            } else if (Number.parseInt(mainArray.packagePrice) === 5300) {
              img.src = "../cartimg/c5000.PNG";
              console.log("../cartimg/c5000.PNG");
            } else if (Number.parseInt(mainArray.packagePrice) === 8400) {
              img.src = `../cartimg/s8400.PNG`;
              console.log("../cartimg/c5000.PNG");
            }

            containerForCartPage[counter].textContent = arrayOfProperty[j];
            a.appendChild(img);
          } else {
            containerForCartPage[counter].textContent = arrayOfProperty[j];
          }

          counter++;
        }
        main.appendChild(hr);
        remove(`n${mainArray.packagePrice}`, mainArray.packagePrice);
      }
    }
  }
}
// fixed arrays

let arrayForFix = ["Red Pack", "", 40000, 1, 40000];
let arrayForFix2 = ["nikon Pack", "", 20000, 1, 20000];
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
// fixed render function
function fixedPacks() {
  if (fixed !== null || fixed2 !== null) {
    if (fixed !== null) {
      let fixedSection = document.createElement("section");
      fixedSection.setAttribute("id", "sectionForFixed");
      main.appendChild(fixedSection);
      fixedQmultiplyPArray.push(Number.parseInt(fixed * 40000));
      for (let i = 0; i < arrayForFix.length; i++) {
        let camDiv = document.createElement("div");
        camDiv.setAttribute("class", "containerForCartPage a");
        fixedSection.appendChild(camDiv);
        containerForCartPage = document.querySelectorAll(".a");
        if (i === 1) {
          camDiv.setAttribute("id", `redPack`);
          divsMaker(`redPack`, arrayForFixModel1);
        } else if (i === 0) {
          let img = document.createElement("img");
          img.setAttribute("class", "img");

          img.src = `../cartimg/redPack.PNG`;

          containerForCartPage[counter].textContent = arrayForFix[i];
          camDiv.appendChild(img);
        } else if (i === 3) {
          let inCart = getLocalStorage(`40000`);
          containerForCartPage[counter].textContent = arrayForFix[i] * inCart;
        } else if (i === 4) {
          containerForCartPage[counter].textContent =
            40000 * getLocalStorage(`40000`);
        } else {
          containerForCartPage[counter].textContent = arrayForFix[i];
        }
        counter++;
      }
      let hr = document.createElement("hr");
      main.appendChild(fixedSection);
      main.appendChild(hr);
      fixedSection.setAttribute("class", "sectionForFixedcls");

      remove(`sectionForFixedcls`, `40000`);
    }
  }
  if (fixed2 !== null) {
    let fixedSection = document.createElement("section");
    fixedSection.setAttribute("id", "sectionForFixed2");
    main.appendChild(fixedSection);
    fixedQmultiplyPArray.push(Number.parseInt(fixed2 * 20000));
    for (let i = 0; i < arrayForFix2.length; i++) {
      let camDiv = document.createElement("div");
      camDiv.setAttribute("class", "containerForCartPage a");
      fixedSection.appendChild(camDiv);
      containerForCartPage = document.querySelectorAll(".a");
      if (i === 1) {
        camDiv.setAttribute("id", `nikonPack`);
        divsMaker(`nikonPack`, arrayForFixModel2);
      } else if (i === 0) {
        let img = document.createElement("img");
        img.setAttribute("class", "img");
        img.src = `../cartimg/nikonPack.PNG`;
        containerForCartPage[counter].textContent = arrayForFix2[i];
        camDiv.appendChild(img);
      } else if (i === 3) {
        let inCart = getLocalStorage(`40000`);
        containerForCartPage[counter].textContent = arrayForFix2[i] * inCart;
      } else if (i === 4) {
        containerForCartPage[counter].textContent =
          20000 * getLocalStorage(`40000`);
      } else {
        containerForCartPage[counter].textContent = arrayForFix2[i];
      }
      counter++;
    }

    let hr = document.createElement("hr");
    main.appendChild(fixedSection);
    main.appendChild(hr);
    fixedSection.setAttribute("class", "sectionForFixed2cls");
    remove(`sectionForFixed2cls`, `20000`);
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
renderForTotal(totalSection());
