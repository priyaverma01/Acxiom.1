// Simulated authentication
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulated authentication logic (Replace with actual authentication logic)
  if (username === 'Priya Verma' && password === 'Priya123') {
    window.location.href = 'welcome.html'; // Redirect to welcome page
  } else {
    alert('Invalid username or password. Please try again.');
  }
  // Function to redirect to Set Reminder section
function redirectToSetReminder() {
  document.querySelector('.welcome-container').style.display = 'none';
  document.querySelector('.set-reminder-container').style.display = 'block';
}

// Handling Set Reminder form submission (Simulated)
document.getElementById('reminderForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const reminderTitle = document.getElementById('reminderTitle').value;
  const reminderDateTime = document.getElementById('reminderDateTime').value;

  // Simulated logic to handle the reminder data
  console.log('Reminder Title:', reminderTitle);
  console.log('Reminder Date and Time:', reminderDateTime);

  // You can add logic here to save the reminder data, interact with a backend, etc.
});

});
