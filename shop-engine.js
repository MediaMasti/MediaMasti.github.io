document.addEventListener("DOMContentLoaded", function () {


    function createProductCard(product) {

    let cardClass = "product-card";

    if (product.category === "Women") {
        cardClass = "women-card";
    }

    else if (product.category === "New Arrivals") {
        cardClass = "new-card";
    }


    return `
    <div class="${cardClass}"
         data-id="${product.id}"
         onclick="window.location.href='product.html?id=${product.id}'">

        <img
        src="${product.image}"
        alt="${product.name}">


        <div class="product-info">

            <h3>
            ${product.name}
            </h3>

            <p>
            ${product.shortDescription}
            </p>

            <strong>
            €${product.price}
            </strong>

            <button
            class="view-product"
            onclick="event.stopPropagation(); window.location.href='product.html?id=${product.id}'">

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
