let producto = JSON.parse(localStorage.getItem("producto"));
let contar = 0;

// Opcional: muestra los datos del producto en detalle.html si tienes estos IDs
if (producto) {
  if (document.getElementById("nombre")) document.getElementById("nombre").textContent = producto.nombre;
  if (document.getElementById("precio")) document.getElementById("precio").textContent = `$ ${producto.precio}`;
  if (document.getElementById("stock")) document.getElementById("stock").textContent = `Disponibles: ${producto.stock}`;
  if (document.getElementById("imagen")) document.getElementById("imagen").src = producto.imagen;
}

function restar() {
  if (contar > 0) {
    contar--;
    document.getElementById("contador").innerHTML = contar;
  }
}

function sumar() {
  if (producto && contar < producto.stock) {
    contar++;
    document.getElementById("contador").innerHTML = contar;
  } else {
    alert("No hay stock suficiente");
  }
}

const agregar = () => {
  if (contar === 0) {
    alert("Selecciona al menos 1 unidad antes de agregar.");
    return;
  }

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
  // Verifica si el producto ya estaba en el carrito para sumar cantidades
  const indiceExistente = carrito.findIndex(item => item.id === producto.id);
  
  if (indiceExistente !== -1) {
    carrito[indiceExistente].cantidad += contar;
  } else {
    carrito.push({
      ...producto,
      cantidad: contar
    });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado al carrito");
  window.location.href = "carrito.html";
};