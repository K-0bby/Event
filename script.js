const toggleBtn = document.querySelector('.menu-icon')
const toggleBtnIcon = document.querySelector('.menu-icon i')
const dropDownmenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownmenu.classList.toggle('open')
}