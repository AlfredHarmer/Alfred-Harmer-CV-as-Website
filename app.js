document.addEventListener('DOMContentLoaded', () => { // tells the browser to wait until the HTML is fully load before running code
    const menu = document.querySelector('#mobile-menu'); //Find the hamburger button in the HTML
    const menuLinks = document.querySelector('.navbar__menu'); // finds the drop down menu <ul> so we can show or hide it 

    if (!menu || !menuLinks) { // this is a saftey check, checks whether menu/menulink is null is niether is true JS stops running and prints an error
        console.error('Menu elements not found');
        return;
    }

    menu.addEventListener('click', () => {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
});