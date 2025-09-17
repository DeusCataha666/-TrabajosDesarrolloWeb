// scriptable.js
async function Cargacomponentes(id, url) {
    const path = "components/"+ id + "/" + url;
    const resp = await fetch(path);
    const html = await resp.text();
    document.getElementById(id).innerHTML = html;
}
Cargacomponentes("header", "header.html");
Cargacomponentes("content", "principal.html");
Cargacomponentes("footer", "footer.html");