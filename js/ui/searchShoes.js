import { renderShoes } from "./renderShoes.js";

export function searchShoes(shoes) {
    const search = document.querySelector(".search");

    search.onkeyup = function (event) {

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredShoes = shoes.filter(function (shoes) {
            if (shoes.title.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        renderShoes(filteredShoes);
    };
}