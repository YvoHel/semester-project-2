    
export async function featured() {

    const featuredContainer = document.querySelector(".featured");
    const urlProduct = "http://localhost:1337/products/"; 
    const url = "http://localhost:1337";
    
    const response = await fetch(urlProduct);
    const results = await response.json();
        

    for (let i = 0; i < results.length; i++) {
    
        if(results[i].featured === true){

            featuredContainer.innerHTML += `<div class="featured-shoe">
            <a href="http://127.0.0.1:5500/product.html?id=${results[i].id}">
            <img src="${url+results[i].image.formats.small.url}" alt="${results[i].image.alternativeText}">
            <p class="shoe-name">${results[i].title}</p>
            <p class="price">$ ${results[i].price} </p>
            </a>
            </div>`;
        }
    }
    


}