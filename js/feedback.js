"use strict";

let feedbackForm = document.getElementById ('form')
let webFeedbacks = document.getElementById ('webFeedbacks')

function Formconstructor (firstName, lastName, feedback, country , gender){
    this.firstName = firstName;
    this.lastName = lastName; 
    this.feedback = feedback;
    this.country = country;
    this.gender = gender
    Formconstructor.formArray.push(this);

    saveToLs();

}


Formconstructor.formArray = [];


feedbackForm.addEventListener('submit', submit)

function submit (event){
    event.preventDefault();
    // console.log(event);

    const newFirstName = event.target.fname.value;
    const newLastName = event.target.lname.value; 
    const newfeedback = event.target.feedback.value;
    const newCountry = event.target.country.value; 
    const newGender = event.target.gender.value; 

    new Formconstructor (newFirstName, newLastName, newfeedback, newCountry, newGender );
    // console.log(Formconstructor.formArray);

    // Direct to feedback page
      location.replace("../pages/feedback.html")
    

    
    renderForm();
    
} 






function saveToLs(){

    // we need to convert this array of objects
    const convertedArr = JSON.stringify(Formconstructor.formArray);
    
    localStorage.setItem('FeedbacksLs', convertedArr);
    
    
  }



  

  function getFromLs(){
    const data = localStorage.getItem('FeedbacksLs');
    console.log(data); 
    
    const parsedFormArr  = JSON.parse(data); 
    // console.log(parsedFormArr); // null 
    if(parsedFormArr){   //parsedFormArr !== null
  
        Formconstructor.formArray = parsedFormArr;
        console.log(Formconstructor.formArray);
      // [] = null
      renderForm();
     
    }
  }

  

  // function myFunction() {
  //   let feedbackCard = document.getElementById ('card')
  //   let  x = document.createElement("IMG");
  //   feedbackCard.appendChild(x);
  //   let divElement= document.createElement('div')
  //   feedbackCard.appendChild(divElement);
  //   divElement.setAttribute("class","container")
  //   let nameElement= document.createElement('h4')
  //   divElement.appendChild(nameElement);
  //   nameElement.textContent= ` ${Formconstructor.formArray[0].firstName} ${Formconstructor.formArray[0].lastName}`;
  //   let countryElement= document.createElement('p')
  //   divElement.appendChild(countryElement);
  //   countryElement.textContent= ` Country: ${Formconstructor.formArray[0].country}`;
  //   let feedbackElement= document.createElement('p')
  //   divElement.appendChild(feedbackElement);
  //   feedbackElement.textContent= ` feedback : ${Formconstructor.formArray[0].feedback}`;


    

  //   x.setAttribute("src", "https://www.w3schools.com/howto/img_avatar.png");
  //   x.setAttribute("width", "230");
  //   x.setAttribute("height", "228");
  //   x.setAttribute("alt", "card image");
    

  // }
  

// let feedbackCard = document.getElementById ('card')
// let cardImage =document.createElement('img')
// feedbackCard.appendChild(cardImage)
// cardImage.src= "https://www.w3schools.com/howto/img_avatar.png"


  function renderForm(){
    // clear all my current uls to prevent duplicate information
    webFeedbacks.textContent = '';
   
    for(let i = 0; i <  Formconstructor.formArray.length; i++){

      // Cards=======================
      function myFunction() {
        let feedbackCard = document.getElementById ('card')
        let everyCardDiv = document.createElement ('div');
        feedbackCard.appendChild(everyCardDiv);
        everyCardDiv.setAttribute("class","everyCardDiv")
        let  x = document.createElement("IMG");
        everyCardDiv.appendChild(x);
        let divElement= document.createElement('div')
        everyCardDiv.appendChild(divElement);
        divElement.setAttribute("class","container")
        let nameElement= document.createElement('h4')
        divElement.appendChild(nameElement);
        nameElement.textContent= ` ${Formconstructor.formArray[i].firstName} ${Formconstructor.formArray[i].lastName}`;
        let countryElement= document.createElement('p')
        divElement.appendChild(countryElement);
        countryElement.textContent= ` Country: ${Formconstructor.formArray[i].country}`;
        let feedbackElement= document.createElement('p')
        divElement.appendChild(feedbackElement);
        feedbackElement.textContent= ` feedback : ${Formconstructor.formArray[i].feedback}`;
    
    
        if (Formconstructor.formArray[i].gender === 'Male') {
          x.setAttribute("src", "https://www.w3schools.com/howto/img_avatar.png");
        } else {
          x.setAttribute("src", "https://www.w3schools.com/howto/img_avatar2.png");
        }   
        
        x.setAttribute("width", "230");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "card image");

        // console.log(Formconstructor.formArray[i].gender);
        
    
      }
      myFunction();
      // Cards=======================
      // const formLI = document.createElement('li');
      // webFeedbacks.appendChild(formLI);
      // formLI.textContent = `-Name: ${Formconstructor.formArray[i].firstName} ${Formconstructor.formArray[i].lastName} -Country: ${Formconstructor.formArray[i].country} -feedback is: ${Formconstructor.formArray[i].feedback} `;
      
    }
    
  }

  getFromLs();


