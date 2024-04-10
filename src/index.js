const renderRegistrationForm = () => {
  const formContainer = document.querySelector('.form-container');
  formContainer.innerHTML = `
    <form id="registrationForm">
      <div class="form-group">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Введите ваше имя" name="name" required>
      </div>
      <div class="form-group">
        <label for="inputEmail">Email</label>
        <input type="text" class="form-control" id="inputEmail" placeholder="Введите email" name="email" required>
      </div>
      <input type="submit" value="Submit" class="btn btn-primary" disabled>
    </form>`;
};

const validateName = (name) => (name.trim() !== '' ? [] : ['name can\'t be blank']);

const validateEmail = (email) => (/\w+@\w+/.test(email) ? [] : ['invalid email']);

const validateField = (field, data) => (field === 'name' ? validateName(data) : validateEmail(data));

export {
  renderRegistrationForm, validateField,
};
