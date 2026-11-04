let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function cargarCarrito() {
  // Asegúrate de tener un <tbody id="tabla-carrito"></tbody> en tu carrito.html
  const tabla = document.getElementById("tabla-carrito");
  tabla.innerHTML = "";

  for (let i = 0; i < carrito.length; i++) {
    let producto = carrito[i];
    let subtotal = producto.precio * producto.cantidad;
    let fila = document.createElement("tr");

    fila.innerHTML = `
      <td><img src="${producto.imagen}" alt="${producto.nombre}" width="100"></td>
      <td>${producto.nombre}</td>
      <td>$ ${producto.precio}</td>
      <td>${producto.cantidad}</td>
      <td>$ ${subtotal}</td>
      <td><button onclick="eliminarProducto(${i})">Eliminar</button></td>
    `;
    tabla.appendChild(fila);
  }
}

function eliminarProducto(indice) {
  carrito.splice(indice, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  cargarCarrito();
}

cargarCarrito();