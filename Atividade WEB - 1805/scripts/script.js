const URLapi = 'http://api.tvmaze.com/shows?q=';
const Formulario = document.getElementById('formularioBusca')

Formulario.addEventListener('submit', async function (event)
    {
        event.preventDefault()

        const pedido = document.getElementById('InputTexto').value;
        const corpoCards = document.getElementsById('corpoCards');

        try {
            const resposta = await fetch(URLapi + pedido);
            const dadosResultantes = await resposta.json();
            corpoCards.innerText = JSON.stringify(dadosResultantes);
        } catch (error) {
            corpoCards.innerText = 'Série não encontrada.';
        }
    });

