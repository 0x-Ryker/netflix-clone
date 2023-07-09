const email = document.getElementById("email");
const password = document.getElementById("password"); 
const form = document.getElementById("container-form");
const msg = document.getElementById("msg");


// Function to validate the email
const validateEmail = (inputEmail)=> inputEmail.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

// Function to validate password
const validatePassword = (inputPassword) => inputPassword.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);



// Function used to display errors
const generateError = (errorName, errorMsg) =>{
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    if(errorName == "email"){
        emailError.innerText = errorMsg;    
    }else if(errorName == "password"){
        passwordError.innerText = errorMsg;
    }
}

const formValidate = (inputEmail, inputPassword) =>{
    if(!validateEmail(inputEmail)){
        emailError = "Please enter a valid email or phone number.";
        generateError("email",emailError);
        return;
    }
    if(!validatePassword(inputPassword)){
        passwordError = "Your password must contain between 4 and 60 characters.";
        generateError(generateError("password",passwordError));
        return;
    }
  
}

//triggers when user submits the form
form.addEventListener("submit",(e) => {
    e.preventDefault();
    formValidate(email, password);
});

// Focusout event listener. Triggers when the user clicks anywhere else besides the input
email.addEventListener("focusout", (e)=>{
    if(!validateEmail(email)){
        email.style.borderColor = "#e87c03";
        generateError("email", "Please enter a valid email or phone number.");
        email.parentElement.classList.add("error");
    }
});

// Focusout event listener triggers when the user clicks anywhere else besides the input
password.addEventListener("focusout", (e)=>{
    if(!validatePassword(password)){
        password.style.borderColor = "#e87c03";
        generateError("password", "Your password must contain between 4 and 60 characters.");
        password.parentElement.classList.add("error");
    }

});


