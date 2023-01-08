let open = document.querySelector('.nordeste');
let close = document.querySelector('.btn-close');
let menu = document.querySelector('.itensNordeste');

open.addEventListener('click', function() {
    menu.style.display = 'block';
});

close.addEventListener('click', function() {
    menu.style.display = 'none';
});