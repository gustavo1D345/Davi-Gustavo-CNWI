const lista = document.getElementById("lista");
const detalhes = document.getElementById("detalhes");
const botao = document.getElementById("adicionar");

botao.addEventListener("click", adicionarJogo);

function adicionarJogo() {

    const titulo = document.getElementById("titulo").value;
    const descricao = document.getElementById("descricao").value;
    const imagem = document.getElementById("imagem").value;

    if (
        titulo.trim() === "" ||
        descricao.trim() === "" ||
        imagem.trim() === ""
    ) {
        alert("Preencha todos os campos");
        return;
    }

    const item = document.createElement("div");

    item.classList.add("jogo");

    item.textContent = titulo;

    item.addEventListener("click", function () {

        detalhes.innerHTML = `
            <h2>${titulo}</h2>

            <img src="${imagem}" alt="${titulo}">

            <p>${descricao}</p>
        `;

    });

    lista.appendChild(item);

    document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("imagem").value = "";
}