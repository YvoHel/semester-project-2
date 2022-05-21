
import { activeShoes } from "./ui/renderActive.js";
import createMenu from "./components/createMenu.js";

const urlProduct = "http://localhost:1337/products/"; 


createMenu()
const shoesContainer = document.querySelector(".container-shoes");
        shoesContainer.innerHTML = "";


        
        
async function getShoes() {
    
const response = await fetch(urlProduct);
const shoes = await response.json();
                
console.log(shoes);
activeShoes(shoes);
    
}
getShoes();





