const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name=email]');
const message = document.querySelector('textarea[name=message]');
const localStorageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

checkData();

form.addEventListener('submit', handlerSent);
form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

function checkData() {
  const savedInfo = localStorage.getItem(localStorageKey);
  if (savedInfo) {
    formData = JSON.parse(savedInfo);
    email.value = formData.email || '';
    message.value = formData.message || '';
  } else {
    email.value = '';
    message.value = '';
  }
}

function handlerSent(evt) {
  evt.preventDefault();
  if (email.value.trim() === '' || message.value.trim() === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    formData = { email: '', message: '' };
    form.reset();
  }
}
