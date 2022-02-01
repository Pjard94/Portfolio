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
const noNumber = /\d/;

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
  } 
  
  if (this == firstName) {
    if ( noNumber.test(this.value) == true) {
      this.classList.add("Form-invalid")
    } else {
      this.classList.add("Form-valid")
    }
  }

  if (this == lastName) {
    if ( noNumber.test(this.value) == true) {
      this.classList.add("Form-invalid")
    } else {
      this.classList.add("Form-valid")
    }
  } 

  if (this == message) {
    this.classList.add("Form-valid")
  }

   if (this == subject) {
    this.classList.add("Form-valid")
  } 
  }
  }else {
    this.classList.add("Form-invalid")
  }
  // console.log(this.value);
});

// Variables for the error messages.
const formStatus = document.getElementById("form-status");
let responseMessage;
let submissionError = 0;

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if(firstName.classList != "contact-form-input Form-valid"){
   responseMessage = "Please enter your first name.";
   submissionError += 1;
  }

  if(lastName.classList != "contact-form-input Form-valid"){
    responseMessage = "Please enter your last name.";
    submissionError += 1;
  }

  if(email.classList != "contact-form-input Form-valid") {
  responseMessage = "Please enter an email address.";
  submissionError += 1;
  } 

  if(subject.classList != "contact-form-input Form-valid"){
    responseMessage = "Can you let me know what you are contacting me about?";
    submissionError += 1;
  }

  if(message.classList != "contact-form-input Form-valid") {
    responseMessage = "Let me know what you need in the message.";
    submissionError += 1;
  }
  
  if(submissionError > 0){
    if(submissionError > 1){
      responseMessage = "The form is incomplete, please check your submission.";
    } 
    formStatus.classList.add("failed-bar");
    formStatus.innerHTML = responseMessage;
    setTimeout(function () {formStatus.classList.remove("failed-bar")}, 5000);
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
    responseMessage = "";
    submissionError = 0;
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
    formStatus.classList.add("success-bar");
    responseMessage = "Thank you for your enquiry.";
    formStatus.innerHTML = responseMessage;
    setTimeout(function () {formStatus.classList.remove("success-bar")}, 5000);
  } else {
    formStatus.classList.add("failed-bar");
    responseMessage = "The form is incomplete, please check your submission.";
    formStatus.innerHTML = responseMessage;
    setTimeout(function () {formStatus.classList.remove("failed-bar")}, 5000);
  }

}