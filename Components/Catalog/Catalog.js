const ROOT_FILTERS = document.querySelector(".filters_section");
const ROOT_CATALOG_LIST = document.querySelector(".catalog_list_section");

class Catalog{
    renderFilters(){
        const title = `<h2 class="filters_section_title">ФИЛЬТРЫ</h2>`;

        ROOT_FILTERS.innerHTML = title;

        const genres = this.getGenres();
        
        ROOT_FILTERS.innerHTML += genres.map((genreName) => {
            return `<button class="genre_button" >${genreName}</button>`;
        }).join("");
    }

    getGenres(){
        const genres = [];

        genres.push("ВСЕ");

        MANGA.map(({genre}) => {
            genre.map((name) => {
                genres.push(name);
            })
        })

        return [... new Set(genres)];
    }

    filterGenre(genre){
        let catalogList = [];

        if(genre === "ВСЕ"){
            catalogList = MANGA;
        } else {
            MANGA.filter((book) => {
                book.genre.filter((name) => {
                    if(name === genre){
                        catalogList.push(book)
                    }
                
                })
            });
        }

        catalogList = catalogList.sort(() => Math.random() - 0.5);

        this.renderCatalog(catalogList, genre)
    }

    renderCatalog(array, genre){
        const title = `<h2 class="catalog_list_title">${genre}</h2>`;

        ROOT_CATALOG_LIST.innerHTML = title;
        
        const catalog = array.map(({img, author, series, id}) => {
            return `
                <div class="catalog_item">
                    <img class="item_img" src="${img}">
                    <span>${author}</span>
                    <span>${series}</span>
                    <button class="item_button" data-id="${id}">В КОРЗИНУ</button>
                </div>
            `
        }).join("");

        ROOT_CATALOG_LIST.innerHTML += catalog;
    }

    renderButtonText(){
        
        const productsList = JSON.parse(localStorage.getItem("productsList")) || [];

        const itemButtons = document.querySelectorAll(".item_button");

        itemButtons.forEach((button) => {
            productsList.forEach((id) => {
                if(button.dataset.id === String(id)){
                    button.textContent = "В КОРЗИНЕ";    
                    button.classList.add("item_active");
                }
            })
        });
    }

    buttonListener(){
        document.querySelectorAll(".item_button").forEach((button) => {
            button.addEventListener("click", (e) => {
                if(e.target.textContent === "В КОРЗИНЕ"){
                    return;
                }
                e.target.classList.add("item_active");
                cartPage.addToCart(e.target.dataset.id); 
                catalogPage.renderButtonText();
            });
        })
    }
}

const catalogPage = new Catalog();

catalogPage.renderFilters();

catalogPage.renderCatalog(MANGA.sort(() => Math.random() - 0.5), "ВСЕ");

const genreButtons = ROOT_FILTERS.querySelectorAll(".genre_button");

catalogPage.renderButtonText();

genreButtons.forEach(button => button.addEventListener("click", (e) => {
    catalogPage.filterGenre(e.target.innerHTML);
    catalogPage.renderButtonText();
    catalogPage.buttonListener();
}));

catalogPage.buttonListener();














