import axios from 'axios';
import onChange from 'on-change';
import { renderRegistrationForm, validateName, validateEmail } from './index.js';

function app() {
  renderRegistrationForm();

  const state = {
    name: '',
    email: '',
    submitButton: 'disabled',
  };

  const watchedState = onChange(state, () => {
    const email = document.querySelector('#inputEmail');
    const name = document.querySelector('#inputName');
    if (!validateEmail(state.email)) {
      email.classList.add('is-invalid');
    } else {
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
    }

    if (!validateName(state.name)) {
      name.classList.add('is-invalid');
    } else {
      name.classList.remove('is-invalid');
      name.classList.add('is-valid');
    }
  });

  const form = document.querySelector('#registrationForm');
  form.addEventListener('input', (e) => {
    const formData = new FormData(form);
    const input = e.target.name;
    const value = formData.get(input);
    watchedState[input] = value;
  });

  const submitButton = document.querySelector('input[type="submit"]');
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    axios.post('/users', {
      firstName: 'Fred',
      lastName: 'Flintstone',
    })
      .then((response) => {
        console.log(response);
        document.body.innerHTML = `<p>${response.data.message}</p>`;
      })
      .catch((error) => console.log(error));
  });
}

export default app;
