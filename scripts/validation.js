
	
//SYSTEM ENTER VALIDATOR
    function validateForm() {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let messageElement = document.getElementById('message');
      
        
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
        let messageElement = document.getElementById('message');
        messageElement.textContent = message;
        messageElement.style.color = color;
    
        setTimeout(function() {
          messageElement.textContent = '';
        }, 10000);
      }
      







      //REGISTRATION VALIDATOR
      function validateForm1() {
     
        let name = document.getElementById('name').value;
        let username = document.getElementById('username').value;
        let birthdate = document.getElementById('birthdate').value;
        let email = document.getElementById('email').value;
  
        
        document.getElementById('errorContainer').innerHTML = '';
  
    
        let isValid = true;
        let errorMessage = '';
  
       
        if (name.trim() === '' || username.trim() === '' || birthdate.trim() === '' || email.trim() === '') {
          isValid = false;
          errorMessage = 'All fields are required.';
        } else {
          
          if (!/\d/.test(username)) {
            isValid = false;
            errorMessage = 'Username must include at least one number.';
          }
  
          
          if (!isValidEmail(email)) {
            isValid = false;
            errorMessage = 'Invalid email format.';
          }
        }
  
       
        let errorContainer = document.getElementById('errorContainer');
        if (!isValid) {
          errorContainer.innerHTML = '<p class="error">' + errorMessage + '</p>';
        } else {
          errorContainer.innerHTML = '<p class="success">Registration successful!</p>';
        }
      }
  
     
      function isValidEmail(email) {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }



