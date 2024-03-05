let menuItems = document.querySelectorAll('.menu > li');
let submenus = document.querySelectorAll('.submenu');
menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {        
        submenus.forEach(function(submenu) {
        submenu.classList.remove('open');
    });
        let submenu = menuItem.querySelector('.submenu');
        submenu.classList.toggle('open');
    });
});
document.addEventListener('click', function(event) {
    if (!event.target.closest('.menu')) {
        submenus.forEach(function(submenu) {
            submenu.classList.remove('open');
        });
    }
});
let likeButton = document.getElementById('like');
let likeCount = document.getElementById('like-count');
likeButton.addEventListener('click', function() {
    let currentCount = parseInt(likeCount.textContent);
    likeCount.textContent = currentCount + 1;
});
let spoilers = document.querySelectorAll('.spoiler-header');
spoilers.forEach(function(spoiler) {
    spoiler.addEventListener('click', function() {
        spoilers.forEach(function(s) {
            if (s !== spoiler && s.classList.contains('active')) {
                s.classList.remove('active');
                s.nextElementSibling.style.display = 'none';
            }
        });
        let isActive = spoiler.classList.toggle('active');
        let content = spoiler.nextElementSibling;
        content.style.display = isActive ? 'block' : 'none';
    });
});