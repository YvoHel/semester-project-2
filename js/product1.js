
    const container = document.querySelector(".shoe-container");
    const title = document.querySelector("title")
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");
    const newUrl = `http://localhost:1337/products/${id}`;
    const url = "http://localhost:1337";

function renderShoe() {
    
    renderShoe.forEach(function (shoe) {
        console.log (shoe);
        
        container.innerHTML += `<div class="shoe">
        <a href="http://127.0.0.1:5500/product.html?id=${shoe.id}">
        <img src="http://localhost:1337${shoe.image.formats.small.url}" alt="${shoes.image.alternativeText}">
        <p class="shoe-name">${shoe.title}</p>
        <p class="price">$ ${shoe.price} </p>
        </a>
        </div>`;
    
    });
}

async function getShoe() {
    
    const response = await fetch(newUrl);
    const shoe = await response.json();
        

    console.log(shoe);

    renderShoe(shoe);
    
}
getShoe();
