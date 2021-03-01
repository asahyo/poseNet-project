const background = document.querySelector('#background');
const index = document.querySelector('.index');
const main = document.querySelector('.main');

function init() {
    /*takes in a function and takes a parameter of the number of seconds
    you want to wait to run it*/
    setTimeout(() => {
        index.style.opacity = 0;
        index.style.display = 'none';
        background.style.opacity = 0;
        background.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => (main.style.opacity = 1), 50);
    }, 4000);
}
/*5700*/

init();
