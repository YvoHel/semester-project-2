import { getUsername } from "../utils/storage.js";

export default function createWlelcomeText() {
    const { pathname } = document.location;

    const container = document.querySelector(".welcome-container");

    const username = getUsername();

    let authLink = pathname;

    if (username) {
        authLink = `<span>Welcome ${username}</span>`;
    }

    console.log(username);
    console.log(authLink);

    container.innerHTML = `<div class="welcone-text">
                                <a href="/" class="${pathname === "/" ? "active" : ""}"></a>
                                ${authLink}
                        </div>`;
}

createWlelcomeText();