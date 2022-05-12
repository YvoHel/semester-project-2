const container = document.querySelector(".shoe-container");
const title = document.querySelector("title")
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const newUrl = `http://localhost:1337/products/${id}`;
const url = "http://localhost:1337";




export async function products() {
        const response = await fetch(newUrl);
        const details = await response.json();
        const result = details;

        console.log(result)
}

products();