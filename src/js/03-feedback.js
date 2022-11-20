import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';



form.addEventListener('input', throttle(onInputForm, 500));

form.addEventListener('submit', onSubmitForm);

window.addEventListener('load', updateOutputOnload);



function onInputForm(event) {
    event.preventDefault();
     const email = form.elements.email.value;
  const message = form.elements.message.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ message, email }));
 
}


function updateOutputOnload(event) {
  event.preventDefault();
 
  const outputTextContent = localStorage.getItem(LOCALSTORAGE_KEY); 
    const outputObjectContent = JSON.parse(outputTextContent)||{email:"", message:""};
    const { email, message } = outputObjectContent;
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
  function onSubmitForm(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const message = formElements.message.value;

    const formData = {
      email,
      message,
    }
    console.log(formData);

    //   localStorage.clear();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();
  }


