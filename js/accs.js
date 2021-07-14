console.log("hi");
// get element by qurr
const aTag = document.querySelectorAll(".A-forsele");
console.log(aTag);
let i;
for (i = 0; i < aTag.length; i++) {
  aTag[i].addEventListener("click", aTagTest);
}

function aTagTest(e) {
  nameAssigner();
  console.log(e.target.classList.value);
  lsChecker(e.target.id);
}
// function clicked(e) {}

/* constr for test*/
let Accessors = function (Name, type, modal, prices, barcode) {
  this.Name = Name;
  this.type = type;
  this.modal = modal;
  this.prices = prices;
  this.barcode = barcode;
  Accessors.arrayOfAccessories.push(this);
};
Accessors.arrayOfAccessories = [];

// let p = ["xx3", "lince", 9990, 600, 123456];
// let l = Accessors.arrayOfAccessories.map((x) => x);
function objMaker() {
  for (let i = 0; i < aTag.length; i++) {
    new Accessors("I" + i, "t" + i, "M" + i, 300 + i * 25 + 1234 + i * 2);
  }
}
function nameAssigner() {
  objMaker();
  for (let i = 0; i < aTag.length; i++) {
    Accessors.arrayOfAccessories[i].index = i;
    console.log(Accessors.arrayOfAccessories);
    aTag[i].setAttribute("id", `${Accessors.arrayOfAccessories[i].Name}`);
  }
}
function lsChecker(myKey, index) {
  let lsCheckerForProducts = JSON.parse(localStorage.getItem(myKey));
  console.log(lsCheckerForProducts);
  //   Accessors.arrayOfAccessories.forEach((s) => console.log("for each", s.Name));
  let secondtest = [];
  // secondtest.map();
  secondtest = Accessors.arrayOfAccessories.map((x) => x.Name);
  console.log(secondtest);
  //   if (lsCheckerForProducts === null) {
  //     let PathfinderAccessors = Accessors.arrayOfAccessories[i].find(
  //       (x) => x === "I0"
  //     );
  //     console.log(PathfinderAccessors);
  //   }
}
