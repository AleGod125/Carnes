import productosCarnes from '/data/fakebd.js';

const contenedor = document.getElementById("productos-container");

window.Click = function(tipo) {
    window.location.href = `/ui/inventarioDetallado/inventarioDetallado.html?tipo=${encodeURIComponent(tipo)}`;
};

productosCarnes.forEach(producto => {
    const cardHTML = `
        <div class="card A" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title" style="color: black;">${producto.nombre}</h5>
                <p class="card-text" style="color: black;">${producto.descripcion}</p>
                <a href="#" onclick="Click('${producto.tipo}')" class="btn btn-primary">Ver más</a>
            </div>
        </div>
    `;

    contenedor.innerHTML += cardHTML;
});
