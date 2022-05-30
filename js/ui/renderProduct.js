export async function getShoe() {

const container = document.querySelector(".shoe-container");
const title = document.querySelector("title")
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const newUrl = `http://localhost:1337/products/${id}`;
const url = "http://localhost:1337";

    const response = await fetch(newUrl);
    const result = await response.json();

    container.innerHTML += `
        <img src="http://localhost:1337${result.image.formats.small.url}" alt="${result.image.alternativeText}">
        <div class="info">
        <h1>${result.title}</h1>
        <p class="price">$ ${result.price}</p>
        <p class="description">${result.description}</p>
        </div>
        `
    
        title.innerHTML +=
        `Happy Feet | ${result.title}
        `
    };