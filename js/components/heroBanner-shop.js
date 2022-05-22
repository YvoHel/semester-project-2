export async function heroBanner2() {

    const banner2 = document.querySelector(".hero-banner2");
    const urlProduct = "http://localhost:1337/products/"; 
    const url = "http://localhost:1337";
    
    const response = await fetch(urlProduct);
    const results = await response.json();
        

    console.log(results);
    
    banner2.innerHTML += `
    <img class="banner" src="${url+results[5].image.url}" alt="${results.hero_banner_alt_text}">
    `;

}