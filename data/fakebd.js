const productosCarnes = [
    {
        id: 1,
        nombre: "Carne de Res",
        imagen: "https://www.saborusa.com/wp-content/uploads/2021/02/cortes-de-res.webp",
        descripcion: "Corte de res ideal para asados o parrillas. Rico en proteínas, con un sabor profundo y jugoso.",
        tipo: "Res"
    },
    {
        id: 2,
        nombre: "Carne de Cerdo",
        imagen: "https://secure.porcicultura.com/uploads/Upload-5ebd90f523a6d-14052020.jpeg",
        descripcion: "Costilla de cerdo, perfecta para asados y guisos. Carne jugosa con un sabor suave y delicioso.",
        tipo: "Cerdo"
    },
    {
        id: 3,
        nombre: "Carne de Pollo",
        imagen: "https://thefoodtech.com/wp-content/uploads/2020/09/maduracion-de-carne-de-pollo.jpg",
        descripcion: "Pechuga de pollo, carne blanca, magra y versátil. Ideal para platillos saludables y bajos en grasa.",
        tipo: "Pollo"
    }
];

const fecha = new Date(); // Asegúrate de que esta variable esté definida.
const fechaIngreso = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
const fechaVencimiento = new Date(fecha);
fechaVencimiento.setMonth(fecha.getMonth() + 1);
const fechaVencimientoFormateada = `${fechaVencimiento.getDate()}/${fechaVencimiento.getMonth() + 1}/${fechaVencimiento.getFullYear()}`;

const carnesDeRes = [
    {
        id: 100,
        nombre: "Lomo",
        cantidad: 50,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 30000, // precio en pesos colombianos
        tipo: "Res"
    },
    {
        id: 101,
        nombre: "Solomillo",
        cantidad: 30,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 35000,
        tipo: "Res"
    },
    {
        id: 102,
        nombre: "Costilla",
        cantidad: 20,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 25000,
        tipo: "Res"
    },
    {
        id: 103,
        nombre: "Capón",
        cantidad: 15,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 32000,
        tipo: "Res"
    },
    {
        id: 104,
        nombre: "Chuleta",
        cantidad: 25,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 27000,
        tipo: "Res"
    },
    {
        id: 105,
        nombre: "Falda",
        cantidad: 35,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 22000,
        tipo: "Res"
    },
    {
        id: 106,
        nombre: "Aguja",
        cantidad: 40,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 24000,
        tipo: "Res"
    },
    {
        id: 107,
        nombre: "Brisket",
        cantidad: 12,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 38000,
        tipo: "Res"
    },
    {
        id: 108,
        nombre: "Gulash",
        cantidad: 45,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 18000,
        tipo: "Res"
    },
    {
        id: 109,
        nombre: "Ribeye",
        cantidad: 10,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 42000,
        tipo: "Res"
    }
];

const carnesDePollo = [
    {
        id: 200,
        nombre: "Pechuga",
        cantidad: 50,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 20000, // precio en pesos colombianos
        tipo: "Pollo"
    },
    {
        id: 201,
        nombre: "Muslo",
        cantidad: 40,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 18000,
        tipo: "Pollo"
    },
    {
        id: 202,
        nombre: "Alas",
        cantidad: 30,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 15000,
        tipo: "Pollo"
    },
    {
        id: 203,
        nombre: "Entero",
        cantidad: 25,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 22000,
        tipo: "Pollo"
    },
    {
        id: 204,
        nombre: "Corte en Tiras",
        cantidad: 20,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 17000,
        tipo: "Pollo"
    },
    {
        id: 205,
        nombre: "Cadera",
        cantidad: 15,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 16000,
        tipo: "Pollo"
    },
    {
        id: 206,
        nombre: "Sopa",
        cantidad: 35,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 14000,
        tipo: "Pollo"
    },
    {
        id: 207,
        nombre: "Patas",
        cantidad: 10,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 13000,
        tipo: "Pollo"
    },
    {
        id: 208,
        nombre: "Corte de Pollo",
        cantidad: 5,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 15000,
        tipo: "Pollo"
    },
    {
        id: 209,
        nombre: "Bistec",
        cantidad: 12,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 18000,
        tipo: "Pollo"
    }
];

const carnesDeCerdo = [
    {
        id: 300,
        nombre: "Lomo",
        cantidad: 50,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 25000,
        tipo: "Cerdo"
    },
    {
        id: 301,
        nombre: "Costilla",
        cantidad: 40,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 22000,
        tipo: "Cerdo"
    },
    {
        id: 302,
        nombre: "Chuleta",
        cantidad: 30,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 26000,
        tipo: "Cerdo"
    },
    {
        id: 303,
        nombre: "Pierna",
        cantidad: 25,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 24000,
        tipo: "Cerdo"
    },
    {
        id: 304,
        nombre: "Bacon",
        cantidad: 20,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 30000,
        tipo: "Cerdo"
    },
    {
        id: 305,
        nombre: "Paleta",
        cantidad: 15,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 28000,
        tipo: "Cerdo"
    },
    {
        id: 306,
        nombre: "Sausage",
        cantidad: 35,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 20000,
        tipo: "Cerdo"
    },
    {
        id: 307,
        nombre: "Tocino",
        cantidad: 10,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 33000,
        tipo: "Cerdo"
    },
    {
        id: 308,
        nombre: "Filete",
        cantidad: 5,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 34000,
        tipo: "Cerdo"
    },
    {
        id: 309,
        nombre: "Corte de Cerdo",
        cantidad: 12,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 18000,
        tipo: "Cerdo"
    }
];

export default productosCarnes;
export { carnesDeRes };
export { carnesDePollo };
export { carnesDeCerdo };

