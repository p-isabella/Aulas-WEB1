const apiURL = 'https://api.tvmaze.com/search/shows?q=';
const formulario = document.getElementById('formularioSerie');

let resposta = formulario.querySelector('InputSerie');
let corpoCard = document.getElementById('CorpoCards');

let resposta2 = apiURL + resposta;

formulario.addEventListener('submit', buscaSerie());

async function buscaSerie() {
    let resposta = fetch(resposta2);
        if (resposta.ok) {
            resposta = resposta.json();
            corpoCard.innerText = resposta.json();
        } else {
            console.log("naooo");
        }
    } 


