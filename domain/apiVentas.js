import productosCarnes, { ventas } from '/data/fakebd.js';

const fechaActual = new Date();
const numeroDelMesActual = fechaActual.getMonth() + 1;


function obtenerTotalPorMes(numeroMes) {
    const mesString = numeroMes.toString().padStart(2, '0');

    const ventasDelMes = ventas.filter(venta => {
        const [dia, mes, año] = venta.fechaVenta.split("/"); 
        return mes === mesString; 
    });

    const total = ventasDelMes.reduce((acumulador, venta) => acumulador + venta.precio, 0);

    return total;
}

function obtenerVentasPorTipoYMes(tipo, numeroMes) {
    const mesString = numeroMes.toString().padStart(2, '0');

    const ventasDelMes = ventas.filter(venta => {
        const [dia, mes, año] = venta.fechaVenta.split("/");
        return mes === mesString && venta.tipo === tipo;
    });

    const totalPorTipo = ventasDelMes.reduce((acumulador, venta) => acumulador + venta.precio, 0);

    return totalPorTipo;
}

function porcentaje() {
    const totalMes = obtenerTotalPorMes(numeroDelMesActual);
    const totalRes = obtenerVentasPorTipoYMes("Res", numeroDelMesActual);
    const totalCerdo = obtenerVentasPorTipoYMes("Cerdo", numeroDelMesActual);
    const totalPollo = obtenerVentasPorTipoYMes("Pollo", numeroDelMesActual);

    const totalCarne = totalRes + totalCerdo + totalPollo;

    const porcentajeRes = (totalRes / totalMes) * 100 || 0;
    const porcentajeCerdo = (totalCerdo / totalMes) * 100 || 0;
    const porcentajePollo = (totalPollo / totalMes) * 100 || 0;

    document.getElementById('porcentajeRes').textContent = `${porcentajeRes.toFixed(2)}%`; 
    document.getElementById('progressRes').value = porcentajeRes; 

    document.getElementById('porcentajePollo').textContent = `${porcentajePollo.toFixed(2)}%`; 
    document.getElementById('progressPollo').value = porcentajePollo; 

    document.getElementById('porcentajeCerdo').textContent = `${porcentajeCerdo.toFixed(2)}%`; 
    document.getElementById('progressCerdo').value = porcentajeCerdo;
    console.log(porcentajeRes);

    return {
        totalMes,
        totalRes,
        totalCerdo,
        totalPollo,
        porcentajeRes,
        porcentajeCerdo,
        porcentajePollo,
    };
}

function obtenerDetallesVentasMesActual() {
    const mesString = numeroDelMesActual.toString().padStart(2, '0');
    
    const ventasDelMes = ventas.filter(venta => {
        const [dia, mes, año] = venta.fechaVenta.split("/");
        return mes === mesString; 
    });

    const detalles = ventasDelMes.map(venta => ({
        nombre: venta.nombre,
        precio: venta.precio,
        pesoKg: venta.pesoKg,
    }));

    return detalles;
}



export { obtenerTotalPorMes, porcentaje, obtenerDetallesVentasMesActual };