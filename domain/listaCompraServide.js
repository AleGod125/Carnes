import productosCarnes, { listaCompra } from '/data/fakebd.js';

function agregarElemento(nombre, cantidad, precio) {
    const nuevoElemento = {
        nombre,
        cantidad,
        precio,
    };
    listaCompra.push(nuevoElemento);
}

function eliminarElemento(index) {
    if (index >= 0 && index < listaCompra.length) {
        listaCompra.splice(index, 1);
    }
}

function obtenerListaCompra() {
    return listaCompra;
}

export { agregarElemento, eliminarElemento, obtenerListaCompra };
