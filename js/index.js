/* Menú hamburguesa */

const iconHamburguesa = document.querySelector('.burga');
const navSection = document.querySelector('.nav');
const iconCerrar = document.querySelector('.icon-x');

iconHamburguesa.addEventListener('click', () => {
    iconHamburguesa.style.opacity = "0";
    navSection.classList.add('open');
});

iconCerrar.addEventListener('click', () => {
    navSection.classList.remove('open');
    iconHamburguesa.style.opacity = "1";
});
