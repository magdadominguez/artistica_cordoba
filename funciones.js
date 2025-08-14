function buscarElemento(texto){
   location.href= "productos.html"
}


const productos = 
    [
        { 
        "nombre": "Acuarela Profesional 12 Colores",
        "categoria": "Acuarelas",
        "precio": "$12400",
        "descripcion": "Set de acuarelas de alta calidad, colores intensos.",  
        "imagen": "acuarela-12.jpg"
    },
    { 
        "nombre": "Acuarela Escolar 6 Colores Brillantes",
        "categoria": "Acuarelas",
        "precio": "$6000",
        "descripcion": "Ideal para uso escolar, colores básicos.",  
        "imagen": "acuarela-escolar.jpg"
    },
    {
        "nombre": "Acuarela en Tubo Azul Ultramar",
        "categoria": "Acuarelas",
        "precio": "$3500",
        "descripcion": "Tubo de acuarela color azul ultramar.",
        "imagen": "acuarela-azul.jpg"
    },
    {
        "nombre": "Acuarela en Tubo Rojo",
        "categoria": "Acuarelas",
        "precio": "$4500",
        "descripcion": "Tubo de acuarela color rojo cadmio.",
        "imagen": "acuarela-rojo.jpg"
    },
    {
        "nombre": "Acuarela Metálica Oro",
        "categoria": "Acuarelas",
        "precio": "$2000",
        "descripcion": "Acuarela con efecto dorado brillante.",
        "imagen": "acuarela-oro.jpg"
    },
    {
        "nombre": "Óleo Amarillo 200ml",
        "categoria": "Óleos",
        "precio": "$2200",
        "descripcion": "Óleo de secado lento para técnicas profesionales.",
        "imagen": "oleo-amarillo.jpg"
    },
    {
        "nombre": "Óleo Azul Claro 200ml",
        "categoria": "Óleos",
        "precio": "$2300",
        "descripcion": "Color profundo y duradero.",
        "imagen": "oleo-azul.jpg"
    },
    {
        "nombre": "Óleo Rojo Carmesí 200ml",
        "categoria": "Óleos",
        "precio": "$2250",
        "descripcion": "Pigmento profundo y vibrante.",
        "imagen": "oleo-rojo.jpg"
    },
    {
        "nombre": "Óleo Verde Esmeralda 200ml",
        "categoria": "Óleos",
        "precio": "$2400",
        "descripcion": "Perfecto para paisajes y retratos.",
        "imagen": "oleo-verde.jpg"
    },
    {
        "nombre": "Set Óleo 12 Colores",
        "categoria": "Óleos",
        "precio": "$18900",
        "descripcion": "Set completo con colores variados.",
        "imagen": "set-oleos.jpg"
    },
    {
        "nombre": "Acrílico Azul 250ml",
        "categoria": "Acrílicos",
        "precio": "$1500",
        "descripcion": "Pintura acrílica color azul, secado rápido.",
        "imagen": "acrilico-azul.jpg"
    },
    {
        "nombre": "Acrílico Rojo 250ml",
        "categoria": "Acrílicos",
        "precio": "$1500",
        "descripcion": "Pintura acrílica color rojo intenso.",
        "imagen": "acrilico-rojo.jpg"
    },
    {
        "nombre": "Acrílico Amarillo 250ml",
        "categoria": "Acrílicos",
        "precio": "$1500",
        "descripcion": "Pintura acrílica color amarillo brillante.",
        "imagen": "acrilico-amarillo.jpg"
    },
    {
        "nombre": "Set Acrílico 6 Colores Metálicos",
        "categoria": "Acrílicos",
        "precio": "$15000",
        "descripcion": "Set de acrílicos con con tonos metálicos",
        "imagen": "set-acrilico-metalico.jpg"
    },
    {
        "nombre": "Set Acrílico 12 Colores Brillantes",
        "categoria": "Acrílicos",
        "precio": "$20200",
        "descripcion": "Set de acrílicos con tonos vibrantes.",
        "imagen": "set-acrilicos.jpg"
    },
    {
        "nombre": "Block de Dibujo A4",
        "categoria": "Papeles",
        "precio": "$8000",
        "descripcion": "Papel de 120g ideal para lápiz y tinta.",
        "imagen": "block-a4.jpg"
    },
    {
        "nombre": "Papel para Acuarela A3",
        "categoria": "Papeles",
        "precio": "$15000",
        "descripcion": "300g prensado en frío, ideal para acuarela.",
        "imagen": "papel-acuarela.jpg"
    },
    {
        "nombre": "Cartulina Blanca x10",
        "categoria": "Papeles",
        "precio": "$9000",
        "descripcion": "Cartulina de alta calidad para manualidades.",
        "imagen": "cartulina-blanca.jpg"
    },
    {
        "nombre": "Papel Kraft Rollo",
        "categoria": "Papeles",
        "precio": "$5200",
        "descripcion": "Papel resistente ideal para embalaje y dibujo.",
        "imagen": "papel-kraft.jpg"
    },
    {
        "nombre": "Papel Canson Negro A4",
        "categoria": "Papeles",
        "precio": "$9508",
        "descripcion": "Perfecto para dibujos con tiza y lápices de color.",
        "imagen": "papel-canson.jpg"
    },
    {
        "nombre": "Pincel Redondo Nº 2",
        "categoria": "Pinceles",
        "precio": "$4000",
        "descripcion": "Ideal para detalles finos.",
        "imagen": "pincel-2.jpg"
    },
    {
        "nombre": "Pincel Plano Nº 6",
        "categoria": "Pinceles",
        "precio": "$4500",
        "descripcion": "Para trazos anchos y rellenos.",
        "imagen": "pincel-6.jpg"
    },
    {
        "nombre": "Set 5 Pinceles",
        "categoria": "Pinceles",
        "precio": "$8200",
        "descripcion": "Variedad de formas para técnicas mixtas.",
        "imagen": "set-pinceles.jpg"
    },
    {
        "nombre": "Pincel Abanico Nº 4",
        "categoria": "Pinceles",
        "precio": "$6500",
        "descripcion": "Efectos de difuminado.",
        "imagen": "abanico.jpg"
    },
    {
        "nombre": "Brocha Ancha 3 pulgadas",
        "categoria": "Pinceles",
        "precio": "$9050",
        "descripcion": "Ideal para fondos y bases.",
        "imagen": "brocha-3.jpg"
    }
    ];
function mostrarProductos(){
    let contenido= "";
    let titulo= ""; 
    productos.forEach((producto, id)=>{
        if(titulo !=producto.categoria) {
            titulo=producto.categoria;
            contenido+=`<h2 class= "titulos-productos">${titulo}</h2><section class="catalogo">`;
        }
        contenido+=`<div  id="${id}" class="card">
                <div onclick= "mostrarDetalle(${id})"> <a href="detalle-producto.html"><img src="imagenes/${producto.imagen}" alt="${producto.nombre}"></a></div>
                    <h3>${producto.nombre}</h3> 
                    <h3>${producto.precio}</h3>
                    <button class="boton-carrito" type="button" onclick= "agregarProd(${id})"> Agregar al carrito <img src="imagenes/carrito.svg"></button>
            </div>`
console.log(productos[id+1]?.categoria)
            if(titulo !=productos[id+1]?.categoria) {
            contenido+=`</section>`; 
        }
    })
    document.getElementById("listado-productos").innerHTML=contenido
}

const carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];

function agregarProd(idProd){
    console.log(idProd);
    carrito.push(productos[idProd]);
    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
function mostrarCarrito() {
    const car= localStorage.getItem("carrito");
    console.log(`El carrito es: ${car}`);
    let contenido = "";
    JSON.parse(car).forEach((elemento,id) =>{
    contenido +=`<div>
            <div class="productos-elegidos"> 
                <div><img src="imagenes/${elemento.imagen}" alt="${elemento.nombre}"></div>
                <div> <h3>${elemento.nombre}</h3><h3>${elemento.precio}</h3> 
            </div>
        </div>`
    });

    document.getElementById("listado-carrito").innerHTML=contenido;
}

function mostrarDetalle(idProd){
    localStorage.setItem("detalle", idProd);
}
function cargarDetalle(idProd) {
    const id= localStorage.getItem("detalle")
     const elemento= productos[id];
     let contenido= `
     <h1 class="titulos">${elemento.categoria}</h1>
    <div class="producto-detalle">
        <div><img src="imagenes/${elemento.imagen}" alt="${elemento.nombre}"></div>
        <div class="texto-detalle">
            <h3>${elemento.nombre}</h3>
            <h3>${elemento.precio}</h3>
            <p>${elemento.descripcion}</p>
            <button class="boton-carrito2" type="button" onclick= "agregarProd(${id})"> Agregar al carrito <img src="imagenes/carrito.svg"></button>
        </div>
    </div>`;
    document.getElementById("detalle-producto").innerHTML=contenido;
}
function limpiarCarrito(){
    localStorage.removeItem('carrito');
    let contenido= `
    <div class="producto-detalle">
    <p>No hay productos en el carrito.</p>
    </div>`;
    document.getElementById("listado-carrito").innerHTML=contenido;
}
