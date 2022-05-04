const banner = document.querySelector(".hero-banner");
const featuredContainer = document.querySelector(".featured");

const urlHome = "http://localhost:1337/home";
const urlProduct = "http://localhost:1337/products/"; 
const url = "http://localhost:1337";


async function heroBanner() {
    
    const response = await fetch(urlHome);
    const results = await response.json();
        

    console.log(results);
    
    banner.innerHTML += `
    <img class="banner" src="${url+results.hero_banner.url}" alt="${results.hero_banner_alt_text}">
    `;

}

heroBanner();

async function featured() {
    
    const response = await fetch(urlProduct);
    const results = await response.json();
        

    console.log(results);

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

featured();