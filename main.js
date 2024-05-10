import sdk from '@api/virustotal';

sdk.postFiles()
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

  

let attempts = 0;

function validateForm() {
    var dateInput = document.getElementById("dateInput").value;
    var timeInput = document.getElementById("timeInput").value;
    var fileInput = document.getElementById('fileInput');
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const text2Input = document.getElementById('text2Input').value;


    // Date format validation
    var datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(dateInput)) {
        alert("Date format should be YYYY-MM-DD");
        return false;
    }
  
    // Time format validation
    var timePattern = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/;
    if (!timePattern.test(timeInput)) {
        alert("Time format should be HH:MM:SS");
        return false;
    }
  
    // File type and size validation
    if (fileInput.files.length > 0) {
        var file = fileInput.files[0];
        var fileSize = file.size;
        var fileType = file.type;
        
        // Add necessary checks for file type and size as per requirement
        // Example:
        if (fileSize > 1048576) { // 1 MB
            alert("File size should be less than 1MB");
            return false;
        }
        
        // Add more file type checks as required
    }
    else {
        alert("Please select a file.");
        return false;
    }
    
     
     if (((username === 'admin') || (username==='piyush')) && ((password === 'admin@123') || (password === 'piyush@123')) && ((email === 'admin@gmail.com') || (email === 'pj7445045@gmail.com'))) {
        alert('Login successful!');
        window.location.href = "piyush1.html";
        // Redirect to another page or do further actions upon successful login
    } 
    else {
        attempts++;
        if (attempts >= 3) {
            alert('Please attempt again after 2 hours.');
            setTimeout(function () {
                window.close();
            }, 2000); // Close the window after 2 seconds
        } else {
            
            alert('Invalid credentials. Attempts left: ' + (3 - attempts));
            window.location.href = "piyush.html";
            document.getElementById("dateInput").value = "";
            document.getElementById("timeInput").value = "";
            fileInput.value = "";
            document.getElementById('username').value = "";
            document.getElementById('password').value = "";
            document.getElementById('email').value = "";
            document.getElementById('text2Input').value = "";
            
            return validateForm();
        }
    }

    return true;
}
