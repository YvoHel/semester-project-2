

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
                                <a> Active product</a>
                                <a> Edit product</a>
                                <a> Add product</a>
                                ${authLink}
                        </div>`;

    logoutButton();
}

