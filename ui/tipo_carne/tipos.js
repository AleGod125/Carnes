function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

let tipo = getQueryParam('tipo');
if (!tipo) {
    tipo = 'Todo'; 
}
document.getElementById('tipoTexto').textContent = `Carne de : ${tipo}`;

const fecha = new Date();
const fechaIngreso = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
const fechaVencimiento = new Date(fecha);
fechaVencimiento.setMonth(fecha.getMonth() + 1);
const fechaVencimientoFormateada = `${fechaVencimiento.getDate()}/${fechaVencimiento.getMonth() + 1}/${fechaVencimiento.getFullYear()}`;

function generarCantidadAleatoria(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const listaRes = [
    "capon",
    "tenderloin",
    "ribeye",
    "sirloin",
    "brisket",
    "chuck",
    "flank steak",
    "shank",
    "short ribs",
    "top round",
    "hanger steak"
];

const listaPollo = [
    "pechuga",
    "muslo",
    "alitas",
    "pierna",
    "corral",
    "pato",
    "pichón",
    "gallo",
    "paleta",
    "nuggets"
];

const listaCerdo = [
    "lomo",
    "costilla",
    "tocino",
    "jamón",
    "pierna",
    "cabeza",
    "solomillo",
    "panceta",
    "chorizo",
    "pata"
];

let Res = [];

switch (tipo) {
    case 'Res':
        Res = listaRes.map((nombre, index) => ({
            id: 101 + index,
            nombre: nombre,
            cantidad: generarCantidadAleatoria(50, 200),
            FechaIngreso: fechaIngreso,
            FechaVencimiento: fechaVencimientoFormateada
        }));
        break;
    case 'Pollo':
        Res = listaPollo.map((nombre, index) => ({
            id: 201 + index,
            nombre: nombre,
            cantidad: generarCantidadAleatoria(50, 200),
            FechaIngreso: fechaIngreso,
            FechaVencimiento: fechaVencimientoFormateada
        }));
        break;
    case 'Cerdo':
        Res = listaCerdo.map((nombre, index) => ({
            id: 301 + index,
            nombre: nombre,
            cantidad: generarCantidadAleatoria(50, 200),
            FechaIngreso: fechaIngreso,
            FechaVencimiento: fechaVencimientoFormateada
        }));
        break;
    case 'Todo': 
        const todasLasCarne = [...listaRes, ...listaPollo, ...listaCerdo];
        Res = todasLasCarne.map((nombre, index) => ({
            id: 101 + index,
            nombre: nombre,
            cantidad: generarCantidadAleatoria(50, 200),
            FechaIngreso: fechaIngreso,
            FechaVencimiento: fechaVencimientoFormateada
        }));
        break;
    default:
        console.error('Tipo de carne no válido');
        break;
}

// Función para agregar elementos a un contenedor
function agregarElementos(id, items) {
    const container = document.getElementById(id);
    container.innerHTML = ''; 
    items.forEach(item => {
        const listItem = document.createElement('p');
        listItem.innerHTML = item; 
        container.appendChild(listItem); 
    });
}

agregarElementos('ids', Res.map(post => post.id));
agregarElementos('names', Res.map(post => post.nombre));
agregarElementos('cantidad', Res.map(post => `${post.cantidad} kg`));
agregarElementos('ingreso', Res.map(post => post.FechaIngreso));
agregarElementos('vencimiento', Res.map(post => post.FechaVencimiento));

console.log(Res);
