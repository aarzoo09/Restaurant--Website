const reservationForm = document.querySelector('form');
reservationForm.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const date = document.querySelector('#date').value;
  const successMessage = `Thank you, ${name}! Your reservation for ${date} has been confirmed.`;
  alert(successMessage);
}