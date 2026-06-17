const productos = [
  {
    id: 1,
    nombre: "suculenta",
    imagen: "img/suculentas.jfif",
    descripcion: ".",
    precio: 1900,
    stock: 25
  },
  {
    id: 2,
    nombre: "claveles",
    imagen: "img/clavel.jfif",
    descripcion: ".",
    precio: 1500,
    stock: 18
  },
  {
    id: 3,
    nombre: "catus",
    imagen: "Img/cactus.jfif",
    descripcion: ".",
    precio: 1200,
    stock: 30
  },
  {
    id: 4,
    nombre: "labanda",
    imagen: "img/lavanda.jfif",
    descripcion: ".",
    precio: 1400,
    stock: 20
  },
  {
    id: 5,
    nombre: "aloe vera",
    imagen: "img/aloe vera.jfif",
    descripcion: ".",
    precio: 1600,
    stock: 14
  },
  {
    id: 6,
    nombre: "portulaca",
    imagen: "img/portulaca grandiflora.jfif",
    descripcion: ".",
    precio: 1800,
    stock: 50
  },
  {
    id: 7,
    nombre: "rosas",
    imagen: "img/rosas.jfif",
    descripcion: ".",
    precio: 2200,
    stock: 12
  },
  {
    id: 8,
    nombre: "margaritas",
    imagen: "img/margarita.jfif",
    descripcion: ".",
    precio: 1700,
    stock: 16
  },
  {
    id: 9,
    nombre: "bromelias",
    imagen: "img/bromelia.jfif",
    descripcion: ".",
    precio: 1300,
    stock: 40
  },
  {
    id: 10,
    nombre: "Helecho canguro",
    imagen: "Img/helecho canguro.jfif",
    descripcion: ".",
    precio: 1000,
    stock: 35
  }
];

function cargar() {
    for (let i = 0; i < productos.length; i = i + 1) {
        let parrafo = document.createElement("div")
        parrafo.id= "boxproducto"
        parrafo.innerHTML=`<h2 id="nombre">${productos[i].nombre}</h2>
                        <img src="${productos[i].imagen}" alt="" id="" width="200">
                        <p id="detalle">${productos[i].descripcion}</p>
                        <h3 id="precio">$ ${productos[i].precio}</h3>
                        <p id="stock">${productos[i].stock}</p>
                        <button id="btndetalle" onclick="verdetalle(${productos[i].id})">Ver detalle</button>`
        document.getElementById("boxproductos").appendChild(parrafo)
    }
}
cargar()

function verdetalle(idproducto) {
  const buscarProducto = productos.find(producto => producto.id === parseInt(idproducto));
  let productojson = JSON.stringify(buscarProducto)
  localStorage.setItem("producto", productojson)
  window.location.href ="detalle.html"
}