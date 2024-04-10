import axios from 'axios';
import onChange from 'on-change';
import {
  renderRegistrationForm, validateField,
} from './index.js';

function app() {
  renderRegistrationForm();

  const state = {
    values: {
      name: '',
      email: '',
    },
    errors: {
      name: [],
      email: [],
    },
  };

  const submitButton = document.querySelector('input[type="submit"]');
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    axios.post('/users', {
      name: state.values.name,
      email: state.values.email,
    })
      .then((response) => {
        console.log(response);
        document.body.innerHTML = `<p>${response.data.message}</p>`;
      })
      .catch((error) => console.log(error));
  });

  const hasErrors = (state) => {
    const values = Object.values(state.errors);
    const errorsCount = values.reduce((acc, arr) => acc + arr.length, 0);
    return errorsCount !== 0;
  };

  const watchedState = onChange(state, (path) => {
    const selector = path.split('.')[1];
    const input = document.querySelector(`input[name="${selector}`);
    const validField = validateField(selector, state.values[selector]).length === 0;
    if (!validField) {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
    } else {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
    }

    submitButton.disabled = hasErrors(state);
  });

  const form = document.querySelector('#registrationForm');
  form.addEventListener('input', (e) => {
    const formData = new FormData(form);
    const input = e.target.name;
    const value = formData.get(input);
    watchedState.values[input] = value;
    watchedState.errors[input] = validateField(input, value);
  });
}

export default app;
