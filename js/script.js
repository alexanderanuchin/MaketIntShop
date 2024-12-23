// Слайдер
$('.intro').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 2000,
});

// Гамбургер меню
let hamburger = document.getElementById("hamburger");
let menu = document.getElementById("menu");
let bar = document.querySelectorAll("bar");
let menuItems = menu.querySelectorAll('a');

function hamburgerMenu() {
    if (!menu.classList.contains('hamburger-menu')) {
        hamburger.classList.add('open');
        menu.classList.add('hamburger-menu');
        menu.classList.add('animate__fadeInRight');
        setTimeout(function () {
            menu.classList.remove('animate__fadeInRight')
        }, 1000);
    } else {
        menu.classList.add("animate__fadeOutRight")

        setTimeout(function () {
            menu.classList.remove('animate__fadeOutRight');
            menu.classList.remove('hamburger-menu');
            hamburger.classList.remove('open');
        }, 500);
    }

}

hamburger.addEventListener('click', hamburgerMenu);

// Модальное окно
let openModalButton = document.getElementById('openModalButton');
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');
function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

let form = document.getElementById('form');
let submitButton = document.getElementById('submitButton');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    setTimeout(function (){
        document.getElementById("form").submit();
        form.reset();
        modal.style.display = 'none';
    }, 1000);
});

// https://www.emailjs.com/docs/tutorial/overview/
// Отправка формы на почту

// https://dashboard.emailjs.com/
// Отправка письма с помощью EmailJs
// (function () {
//     emailjs.init("zTa03pXrp5LTY-OwU"); // Замените YOUR_USER_ID на ваш User ID из EmailJS
// })();
// function sendEmail() {
//     const templateParams = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         message: document.getElementById('message').value
//     };

//     emailjs.send('service_z0jesxd', 'template_22dv8yn', templateParams)
//         .then(function (response) {
//             alert('Письмо успешно отправлено!');
//         }, function (error) {
//             alert('Произошла ошибка при отправке письма.');
//         });
// };