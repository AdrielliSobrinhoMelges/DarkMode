/* var, let. const */
/* const = constante => que não muda de valor */
const $html = document.querySelector('html');
const $checkbox = document.querySelector('#switch');

$checkbox.addEventListener('change', function(){
$html.classList.toggle('dark-mode');
})