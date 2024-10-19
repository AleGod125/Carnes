import { obtenerTotalPorMes, porcentaje, obtenerDetallesVentasMesActual} from '/domain/apiVentas.js'; 

const fechaActual = new Date();
const numeroDelMesActual = fechaActual.getMonth() + 1;


function generarDivsVentas() {
    const contenedor = document.getElementById('contenedorVentas');
    const meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

    for (let i = 0; i < numeroDelMesActual; i++) {
        const mes = meses[i];
        const total = obtenerTotalPorMes(i + 1); 

        const div = document.createElement('div');
        div.className = 'ventas';

        const pMes = document.createElement('p');
        pMes.style.marginLeft = '16px';
        pMes.style.color = "black"


        switch (mes) {
            case '01':
                pMes.textContent = 'Enero';
                break;
            case '02':
                pMes.textContent = 'Febrero';
                break;
            case '03':
                pMes.textContent = 'Marzo';
                break;
            case '04':
                pMes.textContent = 'Abril';
                break;
            case '05':
                pMes.textContent = 'Mayo';
                break;
            case '06':
                pMes.textContent = 'Junio';
                break;
            case '07':
                pMes.textContent = 'Julio';
                break;
            case '08':
                pMes.textContent = 'Agosto';
                break;
            case '09':
                pMes.textContent = 'Septiembre';
                break;
            case '10':
                pMes.textContent = 'Octubre';
                break;
            case '11':
                pMes.textContent = 'Noviembre';
                break;
            case '12':
                pMes.textContent = 'Diciembre';
                break;
            default:
                pMes.textContent = 'Mes desconocido'; // Manejo de errores
                break;
        }

        const pPrecio = document.createElement('p');
        pPrecio.style.marginRight = '40%';
        pPrecio.style.color = "black"
        pPrecio.textContent = `$${total}`; 

        div.appendChild(pMes);
        div.appendChild(pPrecio);

        contenedor.appendChild(div);
    }
}

function generarDivsVentasDestallado() {
    const contenedor = document.getElementById('contenedorVentasDestallado'); 
    const detallesVentas = obtenerDetallesVentasMesActual();

    contenedor.innerHTML = '';

    detallesVentas.forEach(venta => {
        const div = document.createElement('div');
        div.className = 'ventas';

        const pNombre = document.createElement('p');
        pNombre.style.marginLeft = '16px';
        pNombre.style.color = "black";
        pNombre.textContent = venta.nombre; 

        const pKg = document.createElement('p');
        pKg.style.color = "black";
        pKg.textContent = `${venta.pesoKg} Kg`; 

        const pPrecio = document.createElement('p');
        pPrecio.style.marginRight = '20%';
        pPrecio.style.color = "black";
        pPrecio.textContent = `$${venta.precio}`; 

        div.appendChild(pNombre);
        div.appendChild(pKg);
        div.appendChild(pPrecio);

        contenedor.appendChild(div);
    });
}



generarDivsVentasDestallado();
generarDivsVentas();
document.addEventListener('DOMContentLoaded', () => {
    porcentaje();
});

