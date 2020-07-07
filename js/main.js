const page = document.querySelector('.page');
const mediaCard = document.querySelectorAll('.m-socialMedia');
const mediaStats = document.querySelectorAll('.m-mediaStats');
const themeToggle = document.querySelector('.a-toggle');

themeToggle.checked = false;

themeToggle.addEventListener('change', function () {
    page.classList.toggle('-lightTheme');
    changeTheme(mediaCard);
    changeTheme(mediaStats);


});

function changeTheme(card) {
    for (let i = 0; i < card.length; i++) {
        card[i].classList.toggle('-lightTheme');
    }
}