const ROOT_HEADER = document.querySelector('.header');
const ROOT_MAIN = document.querySelector('.main');
class Header{
    render(){
        const html = `<div class="header_container">
                        <a href="#" class="header_logo">
                            <i class="fa-solid fa-book"></i>
                        </a>

                        <nav class="header_nav">
                            <a class="header_nav_link" href="#main">Главная</a>
                            <a class="header_nav_link" href="#catalog">Каталог</a>
                            <a class="header_nav_link" href="#about_us">О нас</a>
                            <button class="header_nav_cart">Корзина</button>
                            <button class="header_nav_close">
                                <i class="fa-solid fa-xmark"></i>
                            </button>                       
                        </nav>

                        <button class="header_nav_toggle">
                            <i class="fa-solid fa-bars"></i>
                        </button>
                    </div>`;  
                    
        ROOT_HEADER.innerHTML = html;
    }
    toggleNav(){
        headerNav.classList.toggle('header_nav_show');
    }
};


const headerPage = new Header();
headerPage.render();

const headerNavToggle = document.querySelector('.header_nav_toggle');
const headerNavClose = document.querySelector('.header_nav_close');
const headerNav = document.querySelector('.header_nav');

headerNavToggle.addEventListener('click', () => {
    headerPage.toggleNav();
});
headerNavClose.addEventListener('click', () => {
    headerPage.toggleNav();
}); 

