// Get form elements
const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const button = document.getElementById('btn');

// Function to validate form inputs
function validateInputs(name, age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // Simulate 4-second delay
  });
}

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Get input values
  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value.trim(), 10);

  // Check if inputs are empty
  if (!name || isNaN(age)) {
    alert('Both fields are required.');
    return;
  }

  // Process validation with a promise
  validateInputs(name, age)
    .then((message) => {
      alert(message); // Show success message
    })
    .catch((error) => {
      alert(error); // Show error message
    });
});
