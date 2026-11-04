const productos = [
  { id: 1, nombre: "Suculenta", imagen: "Img/suculentas.jfif", descripcion: "Planta resistente de bajo mantenimiento.", precio: 1900, stock: 25 },
  { id: 2, nombre: "Claveles", imagen: "Img/Clavel.jfif", descripcion: "Flores aromáticas de colores vibrantes.", precio: 1500, stock: 18 },
  { id: 3, nombre: "Cactus", imagen: "Img/Cactus.jfif", descripcion: "Ideal para interiores luminosos y poco riego.", precio: 1200, stock: 30 },
  { id: 4, nombre: "Lavanda", imagen: "Img/Lavanda.jfif", descripcion: "Planta aromática relajante para exterior.", precio: 1400, stock: 20 },
  { id: 5, nombre: "Aloe vera", imagen: "Img/aloe vera.jfif", descripcion: "Planta medicinal de fácil cuidado.", precio: 1600, stock: 14 },
  { id: 6, nombre: "Portulaca", imagen: "Img/portulaca grandiflora.jfif", descripcion: "Planta rastrera con flores muy vistosas.", precio: 1800, stock: 50 },
  { id: 7, nombre: "Rosas", imagen: "Img/Rosas.jfif", descripcion: "Clásico rosal de jardín.", precio: 2200, stock: 12 },
  { id: 8, nombre: "Margaritas", imagen: "Img/margarita.jfif", descripcion: "Flores silvestres alegres y duraderas.", precio: 1700, stock: 16 },
  { id: 9, nombre: "Bromelias", imagen: "Img/Bromelia.jfif", descripcion: "Planta tropical de follaje llamativo.", precio: 1300, stock: 40 },
  { id: 10, nombre: "Helecho canguro", imagen: "Img/Helecho canguro.jfif", descripcion: "Helecho de hojas brillantes para sombra.", precio: 1000, stock: 35 }
];

function cargar() {
  const contenedor = document.getElementById("boxproductos");
  for (let i = 0; i < productos.length; i++) {
    let tarjeta = document.createElement("div");
    tarjeta.className = "boxproducto";
    tarjeta.innerHTML = `
      <h2>${productos[i].nombre}</h2>
      <img src="${productos[i].imagen}" alt="${productos[i].nombre}" width="200">
      <p>${productos[i].descripcion}</p>
      <h3>$ ${productos[i].precio}</h3>
      <p>Stock: ${productos[i].stock}</p>
      <button onclick="verdetalle(${productos[i].id})">Ver detalle</button>
    `;
    contenedor.appendChild(tarjeta);
  }
}

cargar();

function verdetalle(idproducto) {
  const buscarProducto = productos.find(producto => producto.id === parseInt(idproducto));
  localStorage.setItem("producto", JSON.stringify(buscarProducto));
  window.location.href = "detalle.html";
}