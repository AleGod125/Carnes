const listaDatos = [
    {
        tipo: "Res",
        imagen: "https://caracol.com.co/resizer/v2/https%3A%2F%2Fcloudfront-us-east-1.images.arcpublishing.com%2Fprisaradioco%2FFPWXUQFDWRKVZPKD3YBU3MEQLM.jpg?auth=06a354fbf99212345a3bf263664b6bb9be0fc48ea3030510b01b2258b543246c&height=624&width=1080&quality=70&smart=true",
        titulo: "CARNE DE RES",
        descripcion: "Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit, sed do <br> eiusmod tempor incididunt ut labore <br> et dolore magna aliqua. "
    },
    {
        tipo: "Pollo",
        imagen: "https://www.aldelis.com/wp-content/uploads/2020/07/carne-pollo-beneficios-valor-nutricional-1.jpg",
        titulo: "CARNE DE POLLO",
        descripcion: "Lorem ipsum dolor sit amet, <br> consectetur adipiscing elit, sed do <br> eiusmod tempor incididunt ut labore <br> et dolore magna aliqua. Ut enim ad."
    },
    {
        tipo: "Cerdo",
        imagen: "https://recetasconsazon.com/wp-content/uploads/2023/09/carne-de-cerdo-cruda.jpg",
        titulo: "CARNE DE CERDO",
        descripcion: "Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit, sed do <br> eiusmod tempor incididunt ut labore <br> et dolore magna aliqua. "
    }
];

const container = document.querySelector('body');

listaDatos.forEach(item => {
    const block = `
    <div class="continer">
        <div class="img">
            <img class="imgcarne" src="${item.imagen}" alt="${item.tipo}">
            <button onclick="Click('${item.tipo}')" class="btnVer">Ver</button>
        </div>
        <p class="texttile">${item.titulo}</p>
        <p class="textd">${item.descripcion}</p>
    </div>`;

    container.innerHTML += block;
});

function Click(tipo){
    alert("Has hecho clic en: " + tipo);
}
