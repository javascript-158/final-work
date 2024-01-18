function submitData() {
    let firstName = document.getElementById("firstName");
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let BirthDate = document.getElementById("date")
    let Email = document.getElementById("Email")
    let result = document.getElementById("result");
    
    let nameValidator = /^[a-zA-Z]{2,50}$/
    let usernameValidator = /^[a-zA-Z0-9_-]{3,16}$/
    let passwordValidator = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/
    let EmailValidator = /^[a-zA-Z]{2,50}$/
    
    
    if (nameValidator.test(firstName.value) === false) {
        result.style.color = "red";
        result.innerHTML = "Name validation failed";
    }

    if (usernameValidator.test(username.value) === false) {
        result.style.color = "red";
        result.innerHTML = "username validation failed";
    }

    if (passwordValidator.test(password.value) === false) {
        result.style.color = "red";
        result.innerHTML = "Password validation failed";
    }

    if (passwordValidator.test(password.value) === true && usernameValidator.test(username.value) === true && nameValidator.test(firstName.value) === true && EmailValidator.test(Email.value) === true)
    {
        alert("Success")
        result.style.color = "green";
        result.innerHTML = "you have registered succesfully";
    }
}

	

    // let email = document.forms['form']['email'];
    // let password = document.forms['form']['password'];
    
    // let email_error = document.getElementById('email_error');
    // let pass_error = document.getElementById('pass_error');
    
    // email.addEventListener('textInput', email_Verify);
    // password.addEventListener('textInput', pass_Verify);
    
    // function validated(){
    //     if (email.value.length < 9) {
    //         email.style.border = "1px solid red";
    //         email_error.style.display = "block";
    //         email.focus();
    //         return false;
    //     }
    //     if (password.value.length < 6) {
    //         password.style.border = "1px solid red";
    //         pass_error.style.display = "block";
    //         password.focus();
    //         return false;
    //     }
    
    // }
    // function email_Verify(){
    //     if (email.value.length >= 8) {
    //         email.style.border = "1px solid silver";
    //         email_error.style.display = "none";
    //         return true;
    //     }
    // }
    // function pass_Verify(){
    //     if (password.value.length >= 5) {
    //         password.style.border = "1px solid silver";
    //         pass_error.style.display = "none";
    //         return true;
    //     }
    // }
    function validateForm() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var messageElement = document.getElementById('message');
      
        
        messageElement.textContent = '';
      
        
        if (username === '' || password === '') {
          displayMessage('Username and password are required', 'red');
          return false;
        }
      
        
        if (!/\d/.test(password)) {
          displayMessage('Password must contain at least one number', 'red');
          return false;
        }
      
        
        displayMessage('Login successful!', 'green'); 
      
        
        return false;
      }
      
      function displayMessage(message, color) {
        var messageElement = document.getElementById('message');
        messageElement.textContent = message;
        messageElement.style.color = color;
    
        setTimeout(function() {
          messageElement.textContent = '';
        }, 10000);
      }