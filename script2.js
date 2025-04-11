
document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("botao1");
    const container = document.getElementById("container");

    botao.addEventListener("click", function() {
        botao.style.display = "none";
        container.style.display = "flex";
    });
});