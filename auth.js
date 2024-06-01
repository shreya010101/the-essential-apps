document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const switchLink = document.getElementById('switchLink');
    
    // Switch between login and register forms
    switchLink.addEventListener('click', function(event) {
      event.preventDefault();
      if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        switchLink.textContent = "Don't have an account? Register";
      } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        switchLink.textContent = "Already have an account? Login";
      }
    });
  
    // Login Form Submission
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        window.location.href = 'home.html';
      } else {
        alert('Invalid email or password!');
      }
    });
  
    // Register Form Submission
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('registerUsername').value;
      const email = document.getElementById('registerEmail').value;
      const password = document.getElementById('registerPassword').value;
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const newUser = { username, email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful!');
      // Optional: Automatically switch to login form after registration
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
      switchLink.textContent = "Don't have an account? Register";
    });
  });
  