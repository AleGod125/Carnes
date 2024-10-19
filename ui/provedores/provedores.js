import { obtenerProveedores} from '/domain/provedores.js'; 


function generarDivsProveedores() {
    const contenedor = document.getElementById('ContinerProvedores'); 
    const listaProveedores = obtenerProveedores(); // Asegúrate de que esta función esté definida


    listaProveedores.forEach(proveedor => {
        const div = document.createElement('div');
        div.className = 'provedores';

        const pNombre = document.createElement('p');
        pNombre.style.marginLeft = '16px';
        pNombre.style.color = "black";
        pNombre.textContent = proveedor.nombre; // Asegúrate de que el objeto proveedor tenga la propiedad 'nombre'

        const pContacto = document.createElement('p');
        pContacto.style.color = "black";
        pContacto.style.marginLeft = "4%"
        pContacto.textContent = proveedor.contacto; // Asegúrate de que el objeto proveedor tenga la propiedad 'contacto'

        const pTelefono = document.createElement('p');
        pTelefono.style.color = "black";
        pTelefono.style.marginLeft = "10%"
        pTelefono.textContent = proveedor.telefono; // Asegúrate de que el objeto proveedor tenga la propiedad 'telefono'

        const pEmail = document.createElement('p');
        pEmail.style.color = "black";
        pEmail.textContent = proveedor.email; // Asegúrate de que el objeto proveedor tenga la propiedad 'email'

        const pDireccion = document.createElement('p');
        pDireccion.style.color = "black";
        pDireccion.textContent = proveedor.direccion; // Asegúrate de que el objeto proveedor tenga la propiedad 'direccion'

        div.appendChild(pNombre);
        div.appendChild(pContacto);
        div.appendChild(pTelefono);
        div.appendChild(pEmail);
        div.appendChild(pDireccion);

        contenedor.appendChild(div);
    });
}

generarDivsProveedores();
