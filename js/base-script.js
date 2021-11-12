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
const failedBar = document.getElementById("failedBar");
const successBar = document.getElementById("successBar");
const emptyREGEX = /^[a-zA-Z0-9]+[a-zA-Z0-9]+[a-zA-Z0-9]+$/;
const messageREGEX = /^[a-zA-Z0-9]+\\p{Punct}+\\s{Space}+$/;
const emailREGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,6}$/;

$(inputs).focus(function() {
  this.classList.add("Form-focused");
  // console.log('in');
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
  // console.log(this.value);
});


submit.addEventListener("click", function (e) {
  e.preventDefault();
  if(email.classList != "contact-form-input Form-valid" || message.classList != "contact-form-input Form-valid" || firstName.classList != "contact-form-input Form-valid" || lastName.classList != "contact-form-input Form-valid" || subject.classList != "contact-form-input Form-valid"){
      failedBar.classList.add("failed-bar");
      setTimeout(function () {failedBar.classList.remove("failed-bar")}, 5000);
      // console.log("this worked");
    } else {
      const XHR = new XMLHttpRequest();
      const XHRData = `first=${firstName.value}&last=${lastName.value}&email=${email.value}&subject=${subject.value}&message=${message.value}`;

      XHR.open('POST', 'contactSubmit.php', true);
      XHR.setRequestHeader('Content-type', 'access-control-allow-headers');
      XHR.send(XHRData);


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

      
    }
})
  

function handleresponse (responseObject) {
  if (responseObject.sent) {
    console.log('this worked')
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
    setTimeout(function () {failedBar.classList.remove("failed-bar")}, 5000);
  }

}