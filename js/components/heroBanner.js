export async function heroBanner() {
    const banner = document.querySelector(".hero-banner");

    const urlHome = "http://localhost:1337/home";
    const url = "http://localhost:1337";

    
    const response = await fetch(urlHome);
    const results = await response.json();
        
    banner.innerHTML += `
    <img class="banner" src="${url+results.hero_banner.url}" alt="${results.hero_banner_alt_text}">
    `;

}