document.getElementById('clubForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  document.getElementById('success-message').textContent = `Thank you, ${name}, for registering!`;
  this.reset();
});
