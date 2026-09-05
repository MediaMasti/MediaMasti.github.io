document.addEventListener("DOMContentLoaded", function () {


    function createProductCard(product) {

        return `
        <div class="product-card"
             data-id="${product.id}">

            <img 
            src="${product.image}" 
            alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>
                ${product.shortDescription}
                </p>

                <strong>
                €${product.price}
                </strong>

                <button class="view-product">
                View Product
                </button>

            </div>

        </div>
        `;

    }



    function loadProducts() {


        const menContainer =
        document.getElementById("men-products");


        const womenContainer =
        document.getElementById("women-products");


        const newContainer =
        document.getElementById("new-products");



        products.forEach(product => {


            const card =
            createProductCard(product);



            if(product.category === "Men"
            && menContainer){

                menContainer.innerHTML += card;

            }



            if(product.category === "Women"
            && womenContainer){

                womenContainer.innerHTML += card;

            }



            if(product.category === "New Arrivals"
            && newContainer){

                newContainer.innerHTML += card;

            }


        });


    }



    loadProducts();


});
