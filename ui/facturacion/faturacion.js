import productosCarnes, { carnesDeRes, carnesDePollo, carnesDeCerdo } from '../../data/fakebd.js';
import { agregarElemento, eliminarElemento, obtenerListaCompra } from '../../domain/listaCompraServide.js';

const searchInput = document.getElementById('searchInput');
const suggestionsContainer = document.getElementById('suggestions');
const namesContainer = document.getElementById('names');
const precioContainer = document.getElementById('precio');
const cantidadContainer = document.getElementById('cantidadContainer');
const btnContainer = document.getElementById('btnContainer');

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
    manejarAgregar(carne.nombre, 1, carne.precio); 
}

document.addEventListener('click', (event) => {
    if (!event.target.closest('.container')) {
        suggestionsContainer.style.display = 'none'; 
    }
});

searchInput.addEventListener('input', buscarCarnes);

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

    listaElementos.forEach((elemento, index) => { // Agregar index como argumento
        const nameElement = document.createElement('div');
        nameElement.textContent = elemento.nombre;
        nameElement.style.margin = '8px'; 

        const precioElement = document.createElement('div');
        precioElement.textContent = elemento.precio;
        precioElement.style.margin = '8px';  

        // Crear el input de cantidad
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

        // Calcular el total cuando cambie la cantidad
        cantidadInput.addEventListener('input', () => {
            const cantidad = parseFloat(cantidadInput.value) || 1; // Manejar valor no numérico
            const precioTotal = parseFloat(elemento.precio) * cantidad;
            precioElement.textContent = `$${precioTotal.toFixed(2)}`; // Mostrar el precio total

            // Actualizar el total general
            totalPrecio = calcularTotal(listaElementos); // Función para calcular el total
            const totalElement = document.getElementById('totalPrecio');
            totalElement.textContent = `Total: $${totalPrecio.toFixed(2)}`;
        });

        const btnElement = document.createElement('div');
        btnElement.style.display = 'flex';
        btnElement.style.justifyContent = 'center';
        btnElement.style.alignItems = 'center';
        btnElement.style.margin = '8px';  
        
        const btn = document.createElement('button');
        btn.className = 'btnEliminar'; 
        btn.textContent = "Eliminar";
        btn.style.margin = '0 8px';  
        
        // Agregar evento de eliminación
        btn.addEventListener('click', () => {
            eliminarElemento(index); // Llamar a la función de eliminación
            mostrarListaCompra(); // Volver a mostrar la lista de compra actualizada
        });

        cantidadElement.appendChild(cantidadInput);
        btnElement.appendChild(btn);

        namesContainer.appendChild(nameElement);
        btnContainer.appendChild(btnElement);
        precioContainer.appendChild(precioElement);
        cantidadContainer.appendChild(cantidadElement);
    });

    // Calcular el total inicial
    totalPrecio = calcularTotal(listaElementos);
    const totalElement = document.getElementById('totalPrecio');
    totalElement.textContent = `Total: $${totalPrecio.toFixed(2)}`;
    totalElement.style.fontWeight = 'bold'; 
}

// Función para calcular el total
function calcularTotal(listaElementos) {
    return listaElementos.reduce((total, elemento) => {
        const cantidadInput = document.querySelector(`input.cantidad`);
        const cantidad = parseFloat(cantidadInput.value) || 1; // Manejar valor no numérico
        return total + (parseFloat(elemento.precio) * cantidad);
    }, 0);
}


