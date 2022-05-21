export function activeShoes(shoesToRender) {
    const shoesContainer = document.querySelector(".container-shoes");
    shoesContainer.innerHTML = "";

    
    shoesToRender.forEach(function (shoes) {
        console.log (shoes);
        
        shoesContainer.innerHTML += `<div class="shoe">
        <a href="edit.html?id=${shoes.id}">
        <img src="http://localhost:1337${shoes.image.formats.small.url}" alt="${shoes.image.alternativeText}">
        <p class="shoe-name">${shoes.title}</p>
        </a>
        <p class="price">$ ${shoes.price} </p>
        </div>`;
    
    });
}
