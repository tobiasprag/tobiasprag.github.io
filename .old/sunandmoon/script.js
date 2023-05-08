give_moon = document.getElementById('give_moon');
give_sun = document.getElementById('give_sun');

moon = document.getElementById('moon');
sun = document.getElementById('sun');

background = document.getElementById('main');

changeSun = document.getElementById('change_sun');
changeMoon = document.getElementById('change_moon');



give_moon.addEventListener('click', evt => {
    moon.style.top = "40%"
    moon.style.left = "10%"
    moon.style.width = "25%"
});
changeSun.addEventListener('click', evt => {
    background.style.backgroundImage = "url('img/day.webp')";

    moon.style.display = "none"
    sun.style.display = "block"

    give_moon.style.display = "none"
    give_sun.style.display = "block"

    changeSun.style.display = "none"
    changeMoon.style.display = "block"

    moon.style.top = "0"
    moon.style.left = "0"
    moon.style.width = "50vw"
});
give_sun.addEventListener('click', evt => {
    sun.style.top = "40%"
    sun.style.left = "10%"
    sun.style.width = "25%"
});
changeMoon.addEventListener('click', evt => {
    background.style.backgroundImage = "url('img/night.jpg')";

    moon.style.display = "block"
    sun.style.display = "none"

    give_moon.style.display = "block"
    give_sun.style.display = "none"

    changeSun.style.display = "block"
    changeMoon.style.display = "none"

    sun.style.top = "0"
    sun.style.left = "0"
    sun.style.width = "50vw"
});