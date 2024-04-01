let menu = document.querySelector('.sidebar');
let togle = document.querySelector('img');
togle.onclick = function () {
    menu.classList.toggle('active');
    console.log("hello");
}