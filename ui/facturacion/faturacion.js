import productosCarnes, { carnesDeRes, carnesDePollo, carnesDeCerdo } from '/data/fakebd.js';

const searchInput = document.getElementById('searchInput');
const suggestionsContainer = document.getElementById('suggestions');

function buscarCarnes() {
    const query = searchInput.value.toLowerCase();
    let resultados = [];

    const todasLasCarnes = [...carnesDeRes, ...carnesDePollo, ...carnesDeCerdo];

    resultados = todasLasCarnes.filter(carne => {
        return carne.id.toString().includes(query) || carne.nombre.toLowerCase().includes(query);
    });

    mostrarSugerencias(resultados);
}

function mostrarSugerencias(resultados) {
    suggestionsContainer.innerHTML = ''; 

    if (resultados.length > 0) {
        suggestionsContainer.style.display = 'block';

        resultados.forEach(carne => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.textContent = `${carne.id}: ${carne.nombre}`; 
            suggestionItem.onclick = () => seleccionarSugerencia(carne); 
            suggestionsContainer.appendChild(suggestionItem);
        });
    } else {
        suggestionsContainer.style.display = 'none'; 
    }
}

function seleccionarSugerencia(carne) {
    searchInput.value = carne.nombre; 
    suggestionsContainer.style.display = 'none'; 
    mostrarResultados([carne]); 
}

document.addEventListener('click', (event) => {
    if (!event.target.closest('.container')) {
        suggestionsContainer.style.display = 'none'; 
    }
});

searchInput.addEventListener('input', buscarCarnes);
