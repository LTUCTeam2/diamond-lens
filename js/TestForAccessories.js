/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
"use strict";

// grape small img class

const smallDivCont = document.querySelectorAll(".smallImg");
const smallDivConta = document.querySelector(".smallImg");
const imagesThatWillReplaced = document.querySelectorAll(".hide2");
imagesThatWillReplaced[0].style.display = "block";
// imagesThatWillReplaced[2].style.display = "none";

for (let i = 0; i < smallDivCont.length; i++) {
  smallDivCont[i].addEventListener("mouseover", (e) => {
    // e.target.classList.toggle("smallImg");
    // e.stopPropagation();
    // console.log("bef", e.target.classList[1]);
    // console.log(e.target.classList.toggle("one"));
    if (e.target.classList[1] === "one") {
      imagesThatWillReplaced[1].style.display = "block";
      imagesThatWillReplaced[2].style.display = "none";
      imagesThatWillReplaced[0].style.display = "none";
      // console.log("afft", e.target.classList);
    } else if (e.target.classList[1] === "two") {
      imagesThatWillReplaced[2].style.display = "block";
      imagesThatWillReplaced[0].style.display = "none";
      imagesThatWillReplaced[1].style.display = "none";
      // console.log("afft", e.target.classList);
    } else if (e.target.classList[1] === "three") {
      imagesThatWillReplaced[1].style.display = "none";
      imagesThatWillReplaced[2].style.display = "none";
      imagesThatWillReplaced[0].style.display = "block";
      // console.log("afft", e.target.classList);
    }
  });
}
// make constrictor for Name price Model
