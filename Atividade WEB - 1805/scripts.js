const URL = 'https://api.tvmaze.com/search/shows?q=';
const FORMULARIO = document.getElementById('BuscaSerie');
const RESULTADOS = document.querySelector('.ResultadoCards');


FORMULARIO.addEventListener('submit', async function(evento) {
    evento.preventDefault();
    RESULTADOS.innerHTML = '';
    let serieBuscada = document.getElementById('nomeSerie').value;

    try {
    const resposta = await fetch(URL + `${serieBuscada}`);
    
    if (!resposta.ok) {
        throw new Error("Algo de errado aconteceu. Tente novamente");
    }

    const shows = await resposta.json(); 

    if (shows.length === 0) {
            RESULTADOS.innerHTML = `<div class="card"><p>Nenhuma série encontrada.</p></div>`;
            return;
        }

    shows.forEach(item => {
        const serie = item.show;

        RESULTADOS.innerHTML += `
                <div class="card">
                    <img src="${serie.image?.medium || ''}" alt="${serie.name}">
                    <h2>${serie.name}</h2>
                    <p>Nota: ${serie.rating?.average || 'Sem nota'}</p>
                </div>
            `;
    });

    } catch (erro) {
        console.error("algo deu errado.")
    }
})