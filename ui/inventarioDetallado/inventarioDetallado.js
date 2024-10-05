import productosCarnes, { carnesDeRes, carnesDePollo, carnesDeCerdo } from '/data/fakebd.js';

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const tipoTexto = document.getElementById('tipoTexto');
let tipo = getQueryParam('tipo');
if (!tipo) {
    tipo = 'Res'; 
}
tipoTexto.textContent = `Carne de: ${tipo}`;

const idsContainer = document.getElementById('ids');
const namesContainer = document.getElementById('names');
const cantidadContainer = document.getElementById('cantidad');
const precioContainer = document.getElementById('precio');
const ingresoContainer = document.getElementById('ingreso');
const vencimientoContainer = document.getElementById('vencimiento');

let carnes;
switch (tipo) {
    case 'Res':
        carnes = carnesDeRes;
        break;
    case 'Pollo':
        carnes = carnesDePollo;
        break;
    case 'Cerdo':
        carnes = carnesDeCerdo;
        break;
    default:
        console.error('Tipo de carne no válido');
        break;
}

if (carnes) {
    carnes.forEach(carne => {
        const idElement = document.createElement('div');
        idElement.textContent = carne.id;
        
        const nameElement = document.createElement('div');
        nameElement.textContent = carne.nombre;
        
        const cantidadElement = document.createElement('div');
        cantidadElement.textContent = carne.cantidad +" kg";
        
        const precioElement = document.createElement('div');
        precioElement.textContent = `${carne.precio/2} COP`;
        
        const ingresoElement = document.createElement('div');
        ingresoElement.textContent = carne.FechaIngreso;
        
        const vencimientoElement = document.createElement('div');
        vencimientoElement.textContent = carne.FechaVencimiento;

        idsContainer.appendChild(idElement);
        namesContainer.appendChild(nameElement);
        cantidadContainer.appendChild(cantidadElement);
        precioContainer.appendChild(precioElement);
        ingresoContainer.appendChild(ingresoElement);
        vencimientoContainer.appendChild(vencimientoElement);
    });
}


