const ROOT_FOOTER = document.querySelector(".footer");

class Footer {
    render(){
        const html = `
            <div class="footer_container">
                <div class="footer_social">
                    <h3>СОЦИАЛЬНЫЕ СЕТИ</h3>
                    <a href="#">VK</a>
                    <a href="#">YOUTUBE</a>
                </div>

                <div class="footer_description">
                    <span class="description_text">
                        МАГАЗИН МАНГИ ,ВСЕ ПРАВА ЗАЩИЩЕНЫ <span id="number"><span>
                    </span>
                </div>
            </div>        
        `;

        ROOT_FOOTER.innerHTML = html;
    }
}

const footerPage = new Footer();
footerPage.render();

const  number = document.querySelector("#number");

number.innerHTML = new Date().getFullYear() + " ГОД";