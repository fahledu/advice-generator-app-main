const adviceId = document.querySelector('#advice-id')
const quote = document.querySelector('.quote p');

fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {

        adviceId.innerHTML = data.slip.id;
        quote.innerHTML = data.slip.advice;

    })