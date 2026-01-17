document.addEventListener("DOMContentLoaded", function() {
    if (document.body.classList.contains("no-layout")) return;
    document.body.insertAdjacentHTML("afterbegin", headerEl);
    document.body.insertAdjacentHTML("beforeend", footerEl);

    const wrapperEl = document.querySelector(".my-wrapper");
    if (wrapperEl) wrapperEl.insertAdjacentHTML("afterbegin", `<b>Element at beginning of wrapper element.</b>`);
    if (wrapperEl) wrapperEl.insertAdjacentHTML("beforeend", `<b>Element at the end of wrapper element.</b>`);

    initActiveLinks();
});

function initActiveLinks() {
    const pathname = window.location.pathname;
    [...document.querySelectorAll("a")].forEach((el) => {
        const elHref = el.getAttribute("href").replace(".html", "").replace("/public", "");

        if (pathname == "/") {
            if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
        } else {
            if (window.location.href.includes(elHref)) el.classList.add("active");
        }
    });
}

function getNestingString() {
    const currentUrl = window.location.href.replace("http://", "").replace("https://", "").replace("/public/", "/");
    const numberOfSlahes = currentUrl.split("/").length - 1;
    if (numberOfSlahes == 1) return ".";
    if (numberOfSlahes == 2) return "..";
    return ".." + "/..".repeat(numberOfSlahes - 2);
}

const nesting = getNestingString();

const headerEl = `
    <div class="header">
        <h1>nagsoliko</h1>
        <a href="index.html">home</a> | <a href="pages/recipes.html">food</a> | <a href="pages/books.html">books</a> | <a href="pages/movies.html">films</a> | <a href="pages/games.html">games</a> | <a href="pages/music.html">tunes</a> | <a href="pages/garden.html">garden</a>
        <hr>
    </div>
`;

const currentYear = new Date().getFullYear();
const lastUpdate = new Date(document.lastModified);
const footerEl = `
    <div class="footer">
        <hr>
        Last updated: ${lastUpdate.getFullYear()}/${lastUpdate.getMonth() + 1}/${lastUpdate.getDate()} <br>
        &copy; ${currentYear} Chloë & Soham
    </div>
`;