//This is the text typewriter code
var typed = new Typed('.text-typewriter-output', {
  strings: ["I'm a Web Developer", "I'm a Programmer", "I'm a Designer"],
  // these are the sentences that get typed out
  showCursor: false,
  // this disabled the standard cursor
  typeSpeed: 100,
  smartBackspace: true,
  backSpeed: 100,
  backDelay: 1000,
  // These set the speed and the amount of characters removed
  loop: true,
  loopCount: Infinity
  // These rules set the looping aspect so that the typewriter never stops
});


// This will be for the form submission
const inputs = document.getElementsByClassName("contact-form-input");
const email = document.getElementById("client-email");
const message = document.getElementById("message")
const emptyREGEX = /^[a-zA-Z0-9]+$/;
const messageREGEX = /^[a-zA-Z0-9]+\\p{Punct}+\\s{Space}+$/;
const emailREGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,6}$/;

$(inputs).focus(function() {
  this.classList.add("Form-focused");
  console.log('in');
}).blur(function() {
  this.classList.remove("Form-focused");
  this.classList.remove("Form-valid");
  this.classList.remove("Form-invalid");
  if (this == email) {
    if (emailREGEX.test(this.value) == false) {
      this.classList.add("Form-invalid")
    } else {
      this.classList.add("Form-valid")
    }
  } else if (this == message) {
    this.classList.add("Form-valid")
  }else if (emptyREGEX.test(this.value) == false) {
    this.classList.add("Form-invalid")
  } else {
    this.classList.add("Form-valid")
  }
  console.log(this.value);
});

document.getElementById("contact-form-submit").addEventListener("click", function validateForm() {
  
}) 
