const ROOT_HOME_SECTION = document.querySelector('.home_section');

class HomeSection {
    filterManga(){
        const filteredManga = [];

        const randomNumber = Math.floor(Math.random() * 50);
        for(let i = randomNumber; i < (randomNumber + 10); i++){
            filteredManga.push(MANGA[i]);
        }

        return filteredManga;
    }
    render() {
        const html = `<div class="home_section_container">
                            <h1 class="home_section_title">ПОПУЛЯРНЫЕ КНИГИ</h1>
                        
                            <div class="home_section_slider">
                                ${
                                    this.filterManga().map(({img, series, author}) => {
                                        return `<div class="slider_item">
                                                    <img class="slider_item_img" src="${img}" alt="${series}">
                                                    <span>${series}</span>
                                                    <p>${author}</p>
                                                </div>`
                                    }).join("")
                                }
                                <button class="slider_next_button">
                                    <i class="fa fa-chevron-right"></i>
                                </button>
                                <button class="slider_prev_button">
                                    <i class="fa fa-chevron-left"></i>
                                </button>
                            </div>
                       
                    </div>`;

        ROOT_HOME_SECTION.innerHTML = html;
    }
    
    changeSlide(){
        sliderItems.forEach((item) => {
            item.style.transform = `translateX(calc(-${slide * (item.scrollWidth + 32)}px))`;
        
        });
        
    }
}

const homeSectionPage = new HomeSection();
homeSectionPage.render();

const homeSectionSlider = document.querySelector(".home_section_slider");
const sliderItems = document.querySelectorAll(".slider_item");
const sliderNextButton = document.querySelector('.slider_next_button');
const sliderPrevButton = document.querySelector('.slider_prev_button');
let slide = 0;

sliderNextButton.addEventListener("click", () => {
    const filteredManga = homeSectionPage.filterManga();
    const windowWidth = window.innerWidth;
    slide++;
    if(windowWidth < 600){
        if(slide > filteredManga.length - 1){
        slide = 0;
        
    }
    }
    if(windowWidth > 600 && windowWidth < 900){
        if(slide > filteredManga.length - 2){
        slide = 0;
        
        }
    }
    if(windowWidth > 900 && windowWidth < 1200){
        if(slide > filteredManga.length - 3){
        slide = 0;
        
        }
    }
    if(windowWidth > 1200){
        if(slide > filteredManga.length - 4){
        slide = 0;
        
        }
    }

    
    
    homeSectionPage.changeSlide();
    
});

sliderPrevButton.addEventListener("click", () => {
    const windowWidth = window.innerWidth;
    const filteredManga = homeSectionPage.filterManga();
    slide--;
    if(windowWidth < 600){
        if(slide < 0 ){
            slide = filteredManga.length - 1;
        }
    }
    
    if(windowWidth > 600 && windowWidth < 900){
        if(slide < 0){
        slide = filteredManga.length - 2;
        
        }
    }
    if(windowWidth > 900 && windowWidth < 1200){
        if(slide < 0 ){
            slide = filteredManga.length - 3;
        }
    }
    if(windowWidth > 1200){
        if(slide < 0 ){
            slide = filteredManga.length - 4;
        }
    }
    homeSectionPage.changeSlide();
})