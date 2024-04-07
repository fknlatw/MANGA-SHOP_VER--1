const ROOT_ABOUT_US_CONTAINER = document.querySelector(".about_us_container");

const accordeonText = [
    {text: "Мы стремимся предоставить нашим клиентам лучший опыт покупки манги. Наша команда тщательно отбирает ассортимент, чтобы предложить вам только качественные издания. Мы следим за новинками и стараемся оперативно пополнять наш магазин самыми интересными сериями.", title: "АССОРТИМЕНТ"},
    {text: "Наша цель — сделать покупку манги максимально удобной и приятной. Мы предлагаем доступные цены, быструю доставку и высокий уровень обслуживания.", title: "НАША ЦЕЛЬ"},
    {text: "Если у вас есть вопросы или пожелания, не стесняйтесь обращаться к нам. Мы всегда готовы помочь и предоставить дополнительную информацию.", title: "ВОПРОСЫ"}
];



class Accordeon {
    render(){
        const html = `
            <div class="about_us_accordeon">
                <h2 class="about_us_title">О НАС  </h2>
                <h3>Добро пожаловать на наш сайт! Мы рады приветствовать всех любителей манги и комиксов. Здесь вы найдёте широкий выбор манги на любой вкус.</h3>

                <div class="accordeon">
                    
                </div>

                <h3>Спасибо, что выбрали наш магазин! Мы надеемся, что вы останетесь довольны своим выбором и станете нашим постоянным клиентом.</h3>  
            </div>
        `;

        ROOT_ABOUT_US_CONTAINER.innerHTML = html;
    }

    renderAccordeon(){
        const html = accordeonText.map(({text, title}) => {
            return `
               <div class="accordeon_item">
                   <h3 class="accordeon_title">${title}</h3>
                   <h4 class="accordeon_text hide" data-id="${title}">${text}</h4>
               </div>
           `;
       
        }).join("");

        accordeonElement.innerHTML = html;
    }
}

const accordeonPage = new Accordeon();

accordeonPage.render();


const accordeonElement = document.querySelector(".accordeon");

accordeonPage.renderAccordeon();


const accordeonTitle = document.querySelectorAll(".accordeon_title");

accordeonTitle.forEach(title => {
    title.addEventListener("click", (e) => {
        const currentTitle = e.target;
        const currentText = currentTitle.nextElementSibling;

        

        if(currentText.classList.contains("hide")){
            currentTitle.classList.add("active");
            currentText.style.height = currentText.scrollHeight + "px";
            currentText.classList.remove("hide");
            
            
        } else {
            currentTitle.classList.remove("active");
            currentText.style.height = `0`;
            currentText.classList.add("hide");
        }
        
        removeClass(currentTitle);
    })
})

const removeClass = (element) => {
    accordeonTitle.forEach(title => {
        if(title === element){
            return;
        }
        
        title.classList.remove("active");
        title.nextElementSibling.classList.add("hide");
        title.nextElementSibling.style.height = "0";
    });
}