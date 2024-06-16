document.getElementById('loginForm').addEventListener('submit', function(event) { 
    event.preventDefault(); 
    const username = document.getElementById('username').value; 
    const password = document.getElementById('password').value; 
    if (username && password) { 
        alert('Login successful!'); 
        // Add your login logic here 
    } else { 
        alert('Please enter both username and password.'); 
    } 
});