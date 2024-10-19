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

const fecha = new Date(); 
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
        precio: 30000/2, 
        tipo: "Res"
    },
    {
        id: 101,
        nombre: "Solomillo",
        cantidad: 30,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 35000/2,
        tipo: "Res"
    },
    {
        id: 102,
        nombre: "Costilla",
        cantidad: 20,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 25000/2,
        tipo: "Res"
    },
    {
        id: 103,
        nombre: "Capón",
        cantidad: 15,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 32000/2,
        tipo: "Res"
    },
    {
        id: 104,
        nombre: "Chuleta",
        cantidad: 25,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 27000/2,
        tipo: "Res"
    },
    {
        id: 105,
        nombre: "Falda",
        cantidad: 35,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 22000/2,
        tipo: "Res"
    },
    {
        id: 106,
        nombre: "Aguja",
        cantidad: 40,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 24000/2,
        tipo: "Res"
    },
    {
        id: 107,
        nombre: "Brisket",
        cantidad: 12,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 38000/2,
        tipo: "Res"
    },
    {
        id: 108,
        nombre: "Gulash",
        cantidad: 45,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 18000/2,
        tipo: "Res"
    },
    {
        id: 109,
        nombre: "Ribeye",
        cantidad: 10,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 42000/2,
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
        precio: 20000/2, 
        tipo: "Pollo"
    },
    {
        id: 201,
        nombre: "Muslo",
        cantidad: 40,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 18000/2,
        tipo: "Pollo"
    },
    {
        id: 202,
        nombre: "Alas",
        cantidad: 30,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 15000/2,
        tipo: "Pollo"
    },
    {
        id: 203,
        nombre: "Entero",
        cantidad: 25,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 22000/2,
        tipo: "Pollo"
    },
    {
        id: 204,
        nombre: "Corte en Tiras",
        cantidad: 20,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 17000/2,
        tipo: "Pollo"
    },
    {
        id: 205,
        nombre: "Cadera",
        cantidad: 15,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 16000/2,
        tipo: "Pollo"
    },
    {
        id: 206,
        nombre: "Sopa",
        cantidad: 35,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 14000/2,
        tipo: "Pollo"
    },
    {
        id: 207,
        nombre: "Patas",
        cantidad: 10,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 13000/2,
        tipo: "Pollo"
    },
    {
        id: 208,
        nombre: "Corte de Pollo",
        cantidad: 5,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 15000/2,
        tipo: "Pollo"
    },
    {
        id: 209,
        nombre: "Bistec",
        cantidad: 12,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 18000/2,
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
        precio: 25000/2,
        tipo: "Cerdo"
    },
    {
        id: 301,
        nombre: "Costilla",
        cantidad: 40,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 22000/2,
        tipo: "Cerdo"
    },
    {
        id: 302,
        nombre: "Chuleta",
        cantidad: 30,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 26000/2,
        tipo: "Cerdo"
    },
    {
        id: 303,
        nombre: "Pierna",
        cantidad: 25,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 24000/2,
        tipo: "Cerdo"
    },
    {
        id: 304,
        nombre: "Bacon",
        cantidad: 20,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 30000/2,
        tipo: "Cerdo"
    },
    {
        id: 305,
        nombre: "Paleta",
        cantidad: 15,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 28000/2,
        tipo: "Cerdo"
    },
    {
        id: 306,
        nombre: "Sausage",
        cantidad: 35,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 20000/2,
        tipo: "Cerdo"
    },
    {
        id: 307,
        nombre: "Tocino",
        cantidad: 10,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 33000/2,
        tipo: "Cerdo"
    },
    {
        id: 308,
        nombre: "Filete",
        cantidad: 5,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 34000/2,
        tipo: "Cerdo"
    },
    {
        id: 309,
        nombre: "Corte de Cerdo",
        cantidad: 12,
        FechaIngreso: fechaIngreso,
        FechaVencimiento: fechaVencimientoFormateada,
        precio: 18000/2,
        tipo: "Cerdo"
    }
];

const listaCompra =[]

const ventas = [
    // Enero 2024
    { nombre: "Lomo", tipo: "Res", precio: 32000, pesoKg: 3.5, fechaVenta: "05/01/2024" },
    { nombre: "Costilla", tipo: "Cerdo", precio: 27000, pesoKg: 2.0, fechaVenta: "10/01/2024" },
    { nombre: "Pechuga", tipo: "Pollo", precio: 16000, pesoKg: 1.8, fechaVenta: "15/01/2024" },
    { nombre: "Ribeye", tipo: "Res", precio: 42000, pesoKg: 4.0, fechaVenta: "20/01/2024" },
    { nombre: "Chuleta", tipo: "Cerdo", precio: 24000, pesoKg: 2.5, fechaVenta: "28/01/2024" },
    
    // Febrero 2024
    { nombre: "Solomillo", tipo: "Res", precio: 35000, pesoKg: 3.2, fechaVenta: "01/02/2024" },
    { nombre: "Costilla", tipo: "Cerdo", precio: 21000, pesoKg: 2.1, fechaVenta: "07/02/2024" },
    { nombre: "Muslo", tipo: "Pollo", precio: 14000, pesoKg: 1.5, fechaVenta: "12/02/2024" },
    { nombre: "Falda", tipo: "Res", precio: 22000, pesoKg: 3.0, fechaVenta: "18/02/2024" },
    { nombre: "Entero", tipo: "Pollo", precio: 18000, pesoKg: 2.8, fechaVenta: "25/02/2024" },
    
    // Marzo 2024
    { nombre: "Capón", tipo: "Res", precio: 30000, pesoKg: 3.7, fechaVenta: "02/03/2024" },
    { nombre: "Paleta", tipo: "Cerdo", precio: 28000, pesoKg: 2.9, fechaVenta: "08/03/2024" },
    { nombre: "Cadera", tipo: "Pollo", precio: 17000, pesoKg: 1.7, fechaVenta: "14/03/2024" },
    { nombre: "Brisket", tipo: "Res", precio: 38000, pesoKg: 4.5, fechaVenta: "21/03/2024" },
    { nombre: "Bacon", tipo: "Cerdo", precio: 30000, pesoKg: 2.2, fechaVenta: "27/03/2024" },
    
    // Abril 2024
    { nombre: "Lomo", tipo: "Res", precio: 31000, pesoKg: 3.4, fechaVenta: "05/04/2024" },
    { nombre: "Costilla", tipo: "Cerdo", precio: 25000, pesoKg: 2.0, fechaVenta: "12/04/2024" },
    { nombre: "Pechuga", tipo: "Pollo", precio: 19000, pesoKg: 1.9, fechaVenta: "18/04/2024" },
    { nombre: "Solomillo", tipo: "Res", precio: 35000, pesoKg: 3.6, fechaVenta: "22/04/2024" },
    { nombre: "Sausage", tipo: "Cerdo", precio: 24000, pesoKg: 2.7, fechaVenta: "29/04/2024" },

    // Mayo 2024
    { nombre: "Chuleta", tipo: "Res", precio: 27000, pesoKg: 3.0, fechaVenta: "03/05/2024" },
    { nombre: "Falda", tipo: "Res", precio: 21000, pesoKg: 2.5, fechaVenta: "10/05/2024" },
    { nombre: "Alas", tipo: "Pollo", precio: 15000, pesoKg: 1.6, fechaVenta: "16/05/2024" },
    { nombre: "Capón", tipo: "Res", precio: 32000, pesoKg: 4.0, fechaVenta: "20/05/2024" },
    { nombre: "Tocino", tipo: "Cerdo", precio: 33000, pesoKg: 2.4, fechaVenta: "28/05/2024" },

    // Junio 2024
    { nombre: "Aguja", tipo: "Res", precio: 23000, pesoKg: 2.8, fechaVenta: "02/06/2024" },
    { nombre: "Corte en Tiras", tipo: "Pollo", precio: 16000, pesoKg: 1.5, fechaVenta: "09/06/2024" },
    { nombre: "Costilla", tipo: "Cerdo", precio: 27000, pesoKg: 2.9, fechaVenta: "15/06/2024" },
    { nombre: "Ribeye", tipo: "Res", precio: 40000, pesoKg: 3.8, fechaVenta: "22/06/2024" },
    { nombre: "Falda", tipo: "Res", precio: 22000, pesoKg: 2.4, fechaVenta: "30/06/2024" },

    // Julio 2024
    { nombre: "Filete", tipo: "Cerdo", precio: 34000, pesoKg: 2.7, fechaVenta: "04/07/2024" },
    { nombre: "Entero", tipo: "Pollo", precio: 21000, pesoKg: 3.0, fechaVenta: "10/07/2024" },
    { nombre: "Brisket", tipo: "Res", precio: 39000, pesoKg: 4.2, fechaVenta: "17/07/2024" },
    { nombre: "Lomo", tipo: "Res", precio: 32000, pesoKg: 3.1, fechaVenta: "23/07/2024" },
    { nombre: "Sopa", tipo: "Pollo", precio: 12000, pesoKg: 2.0, fechaVenta: "28/07/2024" },

    // Agosto 2024
    { nombre: "Costilla", tipo: "Cerdo", precio: 28000, pesoKg: 3.2, fechaVenta: "03/08/2024" },
    { nombre: "Pechuga", tipo: "Pollo", precio: 20000, pesoKg: 2.5, fechaVenta: "08/08/2024" },
    { nombre: "Solomillo", tipo: "Res", precio: 36000, pesoKg: 3.9, fechaVenta: "14/08/2024" },
    { nombre: "Capón", tipo: "Res", precio: 35000, pesoKg: 3.7, fechaVenta: "20/08/2024" },
    { nombre: "Bistec", tipo: "Pollo", precio: 15000, pesoKg: 1.8, fechaVenta: "26/08/2024" },

    // Septiembre 2024
    { nombre: "Lomo", tipo: "Res", precio: 30000, pesoKg: 3.0, fechaVenta: "05/09/2024" },
    { nombre: "Pierna", tipo: "Cerdo", precio: 24000, pesoKg: 2.5, fechaVenta: "11/09/2024" },
    { nombre: "Muslo", tipo: "Pollo", precio: 17000, pesoKg: 2.3, fechaVenta: "17/09/2024" },
    { nombre: "Brisket", tipo: "Res", precio: 38000, pesoKg: 4.4, fechaVenta: "23/09/2024" },
    { nombre: "Corte de Pollo", tipo: "Pollo", precio: 19000, pesoKg: 2.2, fechaVenta: "30/09/2024" },

    { nombre: "Aguja", tipo: "Res", precio: 23000, pesoKg: 3.0, fechaVenta: "02/10/2024" },
    { nombre: "Bacon", tipo: "Cerdo", precio: 29000, pesoKg: 2.1, fechaVenta: "09/10/2024" },
    { nombre: "Patas", tipo: "Pollo", precio: 14000, pesoKg: 1.6, fechaVenta: "16/10/2024" },
    { nombre: "Capón", tipo: "Res", precio: 34000, pesoKg: 4.0, fechaVenta: "21/10/2024" },
    { nombre: "Ribeye", tipo: "Res", precio: 40000, pesoKg: 4.1, fechaVenta: "28/10/2024" }
];

export default productosCarnes;
export { carnesDeRes,carnesDePollo,carnesDeCerdo,listaCompra };
export { ventas };
