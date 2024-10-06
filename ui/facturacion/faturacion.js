import productosCarnes, { carnesDeRes, carnesDePollo, carnesDeCerdo } from './data/fakebd.js'; // Ruta relativa
import { agregarElemento, eliminarElemento, obtenerListaCompra } from './domain/listaCompraService.js'; // Ruta relativa

const searchInput = document.getElementById('searchInput');
const suggestionsContainer = document.getElementById('suggestions');
const namesContainer = document.getElementById('names');
const precioContainer = document.getElementById('precio');
const cantidadContainer = document.getElementById('cantidadContainer');
const btnContainer = document.getElementById('btnContainer');

function buscarCarnes() {
    const query = searchInput.value.toLowerCase();
    const todasLasCarnes = [...carnesDeRes, ...carnesDePollo, ...carnesDeCerdo];
    
    const resultados = todasLasCarnes.filter(carne => {
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
    manejarAgregar(carne.nombre, 1, carne.precio); 
}

function manejarAgregar(nombre, cantidad, precio) {
    agregarElemento(nombre, cantidad, precio);
    mostrarListaCompra();
}

function mostrarListaCompra() {
    namesContainer.innerHTML = '';
    precioContainer.innerHTML = '';
    cantidadContainer.innerHTML = ''; 
    btnContainer.innerHTML = ''; 

    const listaElementos = obtenerListaCompra();
    let totalPrecio = 0; 

    listaElementos.forEach((elemento, index) => {
        const nameElement = document.createElement('div');
        nameElement.textContent = elemento.nombre;
        nameElement.style.margin = '8px'; 

        const precioElement = document.createElement('div');
        precioElement.textContent = `$${elemento.precio}`;
        precioElement.style.margin = '8px';  

        const cantidadElement = document.createElement('div');
        cantidadElement.style.display = 'flex';
        cantidadElement.style.justifyContent = 'center';
        cantidadElement.style.alignItems = 'center';
        cantidadElement.style.margin = '8px';  
        
        const cantidadInput = document.createElement('input');
        cantidadInput.type = 'number';
        cantidadInput.step = '0.01'; 
        cantidadInput.className = 'cantidad'; 
        cantidadInput.style.margin = '0 12px';  
        cantidadInput.value = '1';  

        cantidadInput.addEventListener('input', () => {
            const cantidad = parseFloat(cantidadInput.value) || 1;
            const precioTotal = parseFloat(elemento.precio) * cantidad;
            precioElement.textContent = `$${precioTotal.toFixed(2)}`;
            actualizarTotal();
        });

        cantidadElement.appendChild(cantidadInput);
        cantidadContainer.appendChild(cantidadElement);

        namesContainer.appendChild(nameElement);
        precioContainer.appendChild(precioElement);
        totalPrecio += parseFloat(elemento.precio); 

        const btnEliminar = document.createElement('button');
        btnEliminar.className = 'btn';
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = () => {
            eliminarElemento(index); 
            mostrarListaCompra(); 
        };
        btnContainer.appendChild(btnEliminar);
    });

    document.getElementById('totalPrecio').textContent = `$${totalPrecio.toFixed(2)}`;
}

function actualizarTotal() {
    let total = 0;
    const listaElementos = obtenerListaCompra();
    listaElementos.forEach(elemento => {
        total += parseFloat(elemento.precio);
    });
    document.getElementById('totalPrecio').textContent = `$${total.toFixed(2)}`;
}

searchInput.addEventListener('input', buscarCarnes);
