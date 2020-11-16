let menu = document.getElementById('menu');
let checkbox = document.getElementById('checkbox');

checkbox.addEventListener('click',openMenu);

 function openMenu(){

    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
    

 }