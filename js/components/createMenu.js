import { getUsername } from "../utils/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu() {
    const { pathname } = document.location;

    const container = document.querySelector(".menu-container");

    const username = getUsername();

    let authLink = pathname;

    if (username) {
        authLink = `<button id="logout">Logout ${username}</button>`;
    }

    console.log(username);
    console.log(authLink);

    container.innerHTML = `<div class="menu">
                                <a href ="admin.html">Home</a>
                                <a href ="add-product.html"> Add product</a>
                                ${authLink}
                        </div>`;

    logoutButton();
}

