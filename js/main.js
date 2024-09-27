(function () {
    const header = document.querySelector('.header');
    windiw.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_activ');
        }
    };
}());