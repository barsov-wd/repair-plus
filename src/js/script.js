var menu = ['1', '2', '3']
var mySwiper = new Swiper('.swiper-container', {
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.reviews-button-next',
        prevEl: '.reviews-button-prev',
    },
});

// burger
const burger = document.querySelector('.header__link-menu');
const menuElem = document.querySelector('.menu');
const menuClose = document.querySelectorAll('[data-menuClose]');

burger.addEventListener('click', () => {
    menuElem.classList.add('menu--active')
    document.body.style.overflow = 'hidden';
});

menuClose.forEach(item => {
    item.addEventListener('click', () => {
        menuElem.classList.remove('menu--active')
        document.body.style.overflow = '';
    })
});

menuElem.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu')) {
        menuElem.classList.remove('menu--active')
        document.body.style.overflow = '';
    }
});

//faq

function faq(title, itemActive) {

    const titles = document.querySelectorAll(title);

    titles.forEach((item) => {
        item.addEventListener('click', () => {
            item.parentElement.classList.toggle(itemActive);

        });
    });

}

faq('.faq__item__title', 'faq__item--active');

function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scarollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scarollWidth;
}

let scrollWidth = calcScroll();

function modal(modal, modalActiveClass, triggers, modalClose) {
    const triggers_ = document.querySelectorAll(triggers),
        modal_ = document.querySelector(modal),
        modalClose_ = document.querySelector(modalClose);

    if (triggers_.length > 0) {
        triggers_.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                modal_.classList.add(modalActiveClass);
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scrollWidth}px`;
            });
        });

        modalClose_.addEventListener('click', () => {
            modal_.classList.remove(modalActiveClass);
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        });

        modal_.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal__container')) {
                modal_.classList.remove(modalActiveClass);
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            }
        });
    }
}

modal('.modal-main', 'modal--active', '[data-modal]', '.modal-main__close');