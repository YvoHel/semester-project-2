import { renderShoes } from "./ui/renderShoes.js";
import { searchShoes } from "./ui/searchShoes.js";
import { heroBanner2 } from "./components/heroBanner-shop.js";
import {onLoadcartNumbers} from "./components/cartNumber.js"

const urlProduct = "http://localhost:1337/products/"; 

onLoadcartNumbers()
heroBanner2();

async function getShoes() {
    
    const response = await fetch(urlProduct);
    const shoes = await response.json();
        

    console.log(shoes);

    renderShoes(shoes);
    searchShoes(shoes);
}

getShoes();










