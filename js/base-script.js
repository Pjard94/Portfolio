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
const message = document.getElementById("message");
const firstName = document.getElementById("contact-form-first");
const lastName = document.getElementById("contact-form-last");
const subject = document.getElementById("email-subject");
const submit = document.getElementById("contact-form-submit");
const form = document.getElementById("contact-form");
const emptyREGEX = /^[a-zA-Z0-9]+[a-zA-Z0-9]+[a-zA-Z0-9]+\\p{Punct}+\\s{Space}+$/;
const messageREGEX = /^[a-zA-Z0-9]+\\p{Punct}+\\s{Space}+$/;
const emailREGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,6}$/;

$(inputs).focus(function() {
  this.classList.add("Form-focused");
  // console.log('in');
}).blur(function() {
  this.classList.remove("Form-focused");
  this.classList.remove("Form-valid");
  this.classList.remove("Form-invalid");
  if (this.value.trim()){
    if (this.value.length == 0){
    this.classList.add("Form-invalid")
  } else {
    if (this == email) {
    if (emailREGEX.test(this.value) == false) {
      this.classList.add("Form-invalid")
    } else {
      this.classList.add("Form-valid")
    }
  } else if (this == message) {
    this.classList.add("Form-valid")
  } else if (this == firstName) {
    this.classList.add("Form-valid")
  } else if (this == lastName) {
    this.classList.add("Form-valid")
  } else if (this == subject) {
    this.classList.add("Form-valid")
  } else {
    this.classList.add("Form-valid")
  }
  }
  }else {
    this.classList.add("Form-invalid")
  }
  
  
  // console.log(this.value);
});

// Variables for the error messages.
const failedBar = document.getElementById("failedBar");
const generalError = document.getElementById("generalError");
const fNameError = document.getElementById("firstError");
const lNameError = document.getElementById("lastError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");
const successBar = document.getElementById("successBar");



submit.addEventListener("click", function (e) {
  e.preventDefault();
  if(firstName.classList != "contact-form-input Form-valid"){
    failedBar.classList.add("failed-bar");
    fNameError.classList.add("messageDisplay");
    setTimeout(function () {failedBar.classList.remove("failed-bar")}, 5000);
    setTimeout(function () {fNameError.classList.remove("messageDisplay")}, 5000);
      // console.log("this worked");
    } else if(email.classList != "contact-form-input Form-valid") {
    failedBar.classList.add("failed-bar");
    emailError.classList.add("messageDisplay");
    setTimeout(function () {failedBar.classList.remove("failed-bar")}, 5000);
    setTimeout(function () {emailError.classList.remove("messageDisplay")}, 5000);
    } else if(lastName.classList != "contact-form-input Form-valid"){
      failedBar.classList.add("failed-bar");
      lNameError.classList.add("messageDisplay");
      setTimeout(function () {failedBar.classList.remove("failed-bar")}, 5000);
      setTimeout(function () {lNameError.classList.remove("messageDisplay")}, 5000);
    } else if(subject.classList != "contact-form-input Form-valid"){
      failedBar.classList.add("failed-bar");
      subjectError.classList.add("messageDisplay");
      setTimeout(function () {failedBar.classList.remove("failed-bar")}, 5000);
      setTimeout(function () {subjectError.classList.remove("messageDisplay")}, 5000);
    } else if(message.classList != "contact-form-input Form-valid") {
      failedBar.classList.add("failed-bar");
      messageError.classList.add("messageDisplay");
      setTimeout(function () {failedBar.classList.remove("failed-bar")}, 5000);
      setTimeout(function () {messageError.classList.remove("messageDisplay")}, 5000);
    } else {
      const XHR = new XMLHttpRequest();
      const XHRData = `first=${firstName.value}&last=${lastName.value}&email=${email.value}&subject=${subject.value}&message=${message.value}`;

      // this part handles the initial response from the page accessing the server
      XHR.onload = () => {
              let responseObject= null;

              try{
                responseObject = JSON.parse(XHR.responseText);
              }catch (e){
                console.error("Could not parse JSON!");
              }

              if (responseObject){
                handleresponse(responseObject);
              }
            }

            
   
      // this will send the contact info to the server
      XHR.open('POST', 'https://peter-jardine.netmatters-scs.co.uk/contactSubmit.php', true);
      XHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      XHR.send(XHRData);


      // XHR.onreadystatechange = function() {
      //   if (this.readyState === this.DONE) {
      //       console.log(this.status) 
      //   }
      // }
    }
})
     

      // this function takes the response and clears the form and removes the client side validation as well as sorting the message
function handleresponse (responseObject) {
  if (responseObject == 'submitted') {
    // console.log('this worked')
    form.reset();
    firstName.classList.remove("Form-valid");
    lastName.classList.remove("Form-valid");
    email.classList.remove("Form-valid");
    subject.classList.remove("Form-valid");
    message.classList.remove("Form-valid");
    successBar.classList.add("success-bar");
    setTimeout(function () {successBar.classList.remove("success-bar")}, 5000);
  } else {
    failedBar.classList.add("failed-bar");
    generalError.classList.add("messageDisplay");
    setTimeout(function () {failedBar.classList.remove("failed-bar")}, 5000);
    setTimeout(function () {generalError.classList.remove("messageDisplay")}, 5000);
  }

}