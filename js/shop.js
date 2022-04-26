const shoeContainer = document.querySelector(".container-shoes");


const urlHome = "http://localhost:1337/home";
const urlProduct = "http://localhost:1337/products/"; 
const url = "http://localhost:1337";

async function makeApiCall() {
    
    const response = await fetch(urlProduct);
    const results = await response.json();
        

    console.log(results);

    for (let i = 0; i < results.length; i++) {
        
            shoeContainer.innerHTML += `<div class="shoe">
            <img src="${url+results[i].image.formats.small.url}" alt="${results[i].image.alternativeText}">
            <p class="shoe-name">${results[i].title}</p>
            <p class="price">$ ${results[i].price} </p>
            </div>`;
        
    }

}

makeApiCall();








