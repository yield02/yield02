const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



const submitBtn = $('.submit-btn');

submitBtn.onclick = Login



function Login(event) {
    event.preventDefault()
    var form = $('#loginForm');
    console.dir(form);
    console.dir(form.username.value
        );

}