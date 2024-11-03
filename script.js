document.addEventListener('DOMContentLoaded', () => {
    const adviceId = document.querySelector('h4 span')
    const quote = document.querySelector('.quote');
    const buttom = document.querySelector('footer')

    fetch('https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then((data) => {

            adviceId.innerHTML = data.slip.id;
            quote.innerHTML = data.slip.advice;
        });

        buttom.addEventListener('click', () => {
            location.reload();
        });
})