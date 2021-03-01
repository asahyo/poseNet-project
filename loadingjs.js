const index = document.querySelector('.index');
const pic = document.querySelector('.pic');
const main = document.querySelector('.main');


function init() {
    /*takes in a function and takes a parameter of the number of seconds
    you want to wait to run it*/
    setTimeout(() => {
        index.style.opacity = 0;
        index.style.display = 'none';
        pic.style.opacity = 0;
        pic.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => (main.style.opacity = 1), 50);
    }, 2000);
}
/*5700*/

init();
