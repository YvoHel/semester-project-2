const container = document.querySelector(".shoe-container");
const title = document.querySelector("title")
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const newUrl = `http://localhost:1337/products/${id}`;
const url = "http://localhost:1337";


async function makeApiCall() {
        const response = await fetch(newUrl);
        const details = await response.json();
        const result = details;

        console.log(result);
        
        container.innerHTML += `
        <img src="${url+result.image.formats.small.url}" alt="${result.image.alternativeText}">
        <div class="info">
        <h1>${result.title}</h1>
        <p class="price">$ ${result.price}</p>
        <p class="description">${result.description}</p>
        <button class="addCart" onclick="addToCart(${result.id})">Add to cart</button>
        </div>
        `

        title.innerHTML +=
        `Happy Feet | ${result.title}
        `
}


makeApiCall();

function addToCart(id){
console.log(id);
}