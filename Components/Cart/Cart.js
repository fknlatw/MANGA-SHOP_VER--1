const ROOT_CART_MENU = document.querySelector(".cart_menu");
const headerNavCart = document.querySelector(".header_nav_cart");


class Cart {
    render(){
        const html = `
            <div class="cart_table">
                <div>
                    <span>ТОВАР</span>
                    <span>ЦЕНА</span>
                </div>

                <div class="cart_products">
                    
                </div>

                <div>
                    <span>СУММА</span>
                    <span class="table_price"></span>
                </div>
                

                <button class="table_close_button">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        `;

        ROOT_CART_MENU.innerHTML = html;
    }

    toggleMenu(){
        ROOT_CART_MENU.classList.toggle("hide_menu");
    }

    addToCart(id){
        cartProductsArray.push(id);
        localStorage.setItem("productsList", JSON.stringify(cartProductsArray)) || [];
        let product = MANGA.find((book) => {
            return book.id === Number(id);
        });
        cartProducts.innerHTML += 
            `<div data-id="${id}" class="cart_product">
                <span>${product.series} ${product.volume >= 0 ? ", ТОМ " +product.volume : ""}</span>
                <span>${product.price}</span> 
                <i class="cart_delete_product fa-solid fa-xmark"></i>
            </div>`;
        
        this.calculateSum();
        this.setListener();
    }

    renderProducts(){
        const productsList = JSON.parse(localStorage.getItem("productsList")) || [];

        productsList.forEach((id) => {
            let product = MANGA.find((book) => {
               return book.id === Number(id);
           });

            cartProducts.innerHTML += 
            `<div data-id="${product.id}" class="cart_product">
                <span>${product.series} ${product.volume >= 0 ? ", ТОМ " +product.volume : ""}</span>
                <span>${product.price}</span>
                <i class="cart_delete_product fa-solid fa-xmark"></i>
            </div>`;
        });

        this.calculateSum();
    }

    calculateSum(){
        let pricePage = 0

        const priceList = document.querySelectorAll(".cart_product span:nth-child(2)");

        const tablePrice = document.querySelector(".table_price");

        tablePrice.innerHTML = priceList.forEach((price) => {
            pricePage += Number(price.innerHTML);    
        });


        tablePrice.innerHTML = pricePage;

    }

    cartDeleteProduct(e){
        e.preventDefault();
        
        const currentProduct = e.target.parentElement;
        const currentProductId = currentProduct.dataset.id;

        cartProductsArray.splice(cartProductsArray.indexOf(currentProductId), 1);
        localStorage.setItem("productsList", JSON.stringify(cartProductsArray)) || [];
        
        currentProduct.remove();

        this.calculateSum();
        this.buttonTextChange(currentProductId);
        
    }

    buttonTextChange(id){
        const itemButtons = document.querySelectorAll(".item_button");

        itemButtons.forEach((button) => {
            if(button.dataset.id === id){
                button.innerHTML = "В КОРЗИНУ";
                button.classList.remove("item_active");
            }
        })
        
        
    }

    setListener(){
        const cartDeleteProduct = document.querySelectorAll(".cart_delete_product");

        cartDeleteProduct.forEach((button) => {
            button.addEventListener("click", (e) => {
                cartPage.cartDeleteProduct(e);
            });
        });
    }
}

const cartPage = new Cart();

cartPage.render();


const tableCloseButton = document.querySelector(".table_close_button");
const cartProducts = document.querySelector(".cart_products");
const tablePrice = document.querySelector(".table_price");


cartPage.renderProducts();

cartPage.setListener();

headerNavCart.addEventListener("click", () => {
    cartPage.toggleMenu();
    headerPage.toggleNav()
});

tableCloseButton.addEventListener("click", () => {
    cartPage.toggleMenu();
})

const cartProductsArray = JSON.parse(localStorage.getItem("productsList")) || [];

