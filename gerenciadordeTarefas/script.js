let prioridadeSelecionada = "Não definida";

function setPrioridade(valor) {
    prioridadeSelecionada = valor;
}

class Card {
    constructor(titulo, descricao, prioridade) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.prioridade = prioridade;
    }
}

const criaCard = () => {
    const titulo = document.getElementById("tituloInput").value;
    const descricao = document.getElementById("descricaoInput").value;

    const cardObj = new Card(titulo, descricao, prioridadeSelecionada);

    const card = document.createElement("div");
    card.classList.add("border", "p-3", "mb-2");
    card.style.width = "250px";

    const h3 = document.createElement("h3");
    const pDesc = document.createElement("p");
    const pPrio = document.createElement("p");

    h3.textContent = cardObj.titulo;
    pDesc.textContent = cardObj.descricao;
    pPrio.textContent = "Prioridade: " + cardObj.prioridade;

    if (cardObj.prioridade === "Alta") {
        card.style.backgroundColor = "#f8d7da";
    } else if (cardObj.prioridade === "Média") {
        card.style.backgroundColor = "#fff3cd";
    } else if (cardObj.prioridade === "Baixa") {
        card.style.backgroundColor = "#d4edda";
    }

    card.appendChild(h3);
    card.appendChild(pDesc);
    card.appendChild(pPrio);

    document.querySelector(".Tarefas").appendChild(card);

    document.getElementById("tituloInput").value = "";
    document.getElementById("descricaoInput").value = "";
};