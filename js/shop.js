import { renderShoes } from "./ui/renderShoes.js";
import { searchShoes } from "./ui/searchShoes.js";

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

async function getShoes() {
    
    const response = await fetch(urlProduct);
    const shoes = await response.json();
        

    console.log(shoes);

    renderShoes(shoes);
    searchShoes(shoes);
}
getShoes();








