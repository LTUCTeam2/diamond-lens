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
        //   console.log("i", i);
        //   let a = document.createElement("div");
        //     a.setAttribute("class", "a");
        //     a.setAttribute("class", "spanCartCounter");
        test = [];
        test.push(arrayOfLocalStorage[i].Name);
        test.push(arrayOfLocalStorage[i].model);
        test.push(arrayOfLocalStorage[i].Price);
        test.push(arrayOfLocalStorage[i].inCart);

        accessQmultiplyP = arrayOfLocalStorage[i].Price * arrayOfLocalStorage[i].inCart
        test.push(accessQmultiplyP);
        accessQmultiplyPArray.push(accessQmultiplyP);

        let section = document.createElement("section");
        section.setAttribute("class", `${arrayOfLocalStorage[i].model}`);
        let hr = document.createElement("hr");
        main.appendChild(hr);
        main.appendChild(section);
        for (let j = 0; j < test.length; j++) {
          containerForCartPage = document.querySelectorAll(".a");
          // console.log("j", j);
          // console.log("counter", counter);
          let a = document.createElement("div");
          a.setAttribute("class", "containerForCartPage a");
          section.appendChild(a);
          // console.log(test[j]);
          // console.log(containerForCartPage);
          containerForCartPage[counter].textContent = test[j];
          counter++;
        }
      }
    }
  }
}
cartKeysChecker();

//   test = arrayOfLocalStorage.map((x) => x.Name);
//   test1 = arrayOfLocalStorage.map((x) => x.model);
//   test2 = arrayOfLocalStorage.map((x) => x.Price);


let camQmultiplyPArray = [];
let camQmultiplyP;
const cam = getLocalStorage("cam");

if (cam !== null) {
  for (let i = 0; i < cam.length; i++) {

    if (getLocalStorage(cam[i].Model) !== null) {
      let camSection = document.createElement('section');
      let hr = document.createElement('hr');
      main.appendChild(hr);
      main.appendChild(camSection);

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

      for (let j = 0; j < abcArray.length; j++) {
        containerForCartPage = document.querySelectorAll(".a");
        let camDiv = document.createElement('div');
        camDiv.setAttribute('class', 'containerForCartPage a');
        camSection.appendChild(camDiv);
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
console.log('Camera Total Array', camQmultiplyPArray);


camQmultiplyP = camQmultiplyPArray.reduce(add,0); 
accessQmultiplyP = accessQmultiplyPArray.reduce(add2,0); 
let sumCamandAccess = camQmultiplyP + accessQmultiplyP;


function add(accumulator, a) {
  return accumulator + a;
}
// console.log('camera sum', camQmultiplyP);

function add2(accumulator2, a2) {
  return accumulator2 + a2;
}

// console.log('Accessories sum', accessQmultiplyP);
console.log('Total Sum', sumCamandAccess);


function totalSection() {
  let sectionForTotal = document.createElement('section');
  sectionForTotal.setAttribute('id','sectionForTotal');
  main.appendChild(sectionForTotal);
  sectionForTotal.textContent = `Total Price: ${sumCamandAccess}`;
}

totalSection();



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




