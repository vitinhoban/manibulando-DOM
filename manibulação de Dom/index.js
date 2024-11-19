function mudarBG(cor) {
    document.body.style.backgroundColor = cor;


    const h1 = document.querySelector("#titulo");

    if (cor.toLowerCase() === "#000000" || cor.toLowerCase() === "black") {
        h1.style.color = "#FFFFFF";
    } else if (cor.toLowerCase() === "#ffffff" || cor.toLowerCase() === "white") {
        h1.style.color = "#000000"; 
    } else {
        h1.style.color = ""; 
    }
}

const corUsuario = prompt("Digite o nome ou código hexadecimal de uma cor para o background:");
if (corUsuario) {
    mudarBG(corUsuario);
} else {
    alert("Nenhuma cor foi inserida!");
}
