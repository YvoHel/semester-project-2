export function renderShoes(shoesToRender) {
    const shoesContainer = document.querySelector(".container-shoes");
    shoesContainer.innerHTML = "";

    
    shoesToRender.forEach(function (shoes) {
        
        shoesContainer.innerHTML += `<div class="shoe">
        <a href="http://127.0.0.1:5500/product.html?id=${shoes.id}">
        <img src="http://localhost:1337${shoes.image.formats.small.url}" alt="${shoes.image.alternativeText}">
        <p class="shoe-name">${shoes.title}</p>
        </a>
        <p class="price">$ ${shoes.price} </p>
        </div>`;
    
    });
}

