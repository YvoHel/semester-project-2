const shoeContainer = document.querySelector(".container-shoes");
const banner2 = document.querySelector(".hero-banner2");


const urlHome = "http://localhost:1337/home";
const urlProduct = "http://localhost:1337/products/"; 
const url = "http://localhost:1337";


async function heroBanner2() {
    
    const response = await fetch(urlProduct);
    const results = await response.json();
        

    console.log(results);
    
    banner2.innerHTML += `
    <img class="banner" src="${url+results[5].image.url}" alt="${results.hero_banner_alt_text}">
    `;

}

heroBanner2();

async function makeApiCall() {
    
    const response = await fetch(urlProduct);
    const results = await response.json();
        

    console.log(results);

    for (let i = 0; i < results.length; i++) {
        
            shoeContainer.innerHTML += `<div class="shoe">
            <a href="http://127.0.0.1:5500/product.html?id=${results[i].id}">
            <img src="http://localhost:1337${results[i].image.formats.small.url}" alt="${results[i].image.alternativeText}">
            <p class="shoe-name">${results[i].title}</p>
            <p class="price">$ ${results[i].price} </p>
            </a>
            </div>`;
        
    }

}

makeApiCall();








