//function for form validation
function validate() {
  //to get the input boxes from HTML
  let name = document.forms["contactForm"]["name"].value;
  let email = document.forms["contactForm"]["email"].value;
//if the input fields are empty and the submit is clicked, the user is given an alert and the form does not submit
  if(name == "") {
    alert("Please provide your name!");
    return false;
  }
  if(email == "") {
    alert("Please provide your email!");
    return false;
  }
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//to get the card selected
const cards = document.querySelectorAll(".singleCard");

//to call the flipCard function when the user clicks on the card
function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard))