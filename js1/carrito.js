let carrito = {
    total: 0
  };
  
  function agregarAlCarrito(producto, precio) {
    if (carrito[producto]) {
      carrito[producto].cantidad++;
    } else {
      carrito[producto] = { precio, cantidad: 1 };
    }
    carrito.total += precio;
    actualizarCarrito();
  }
  
  function vaciarCarrito() {
    carrito = { total: 0 };
    actualizarCarrito();
  }
  
  function quitarDelCarrito(producto) {
    if (carrito[producto] && carrito[producto].cantidad > 0) {
      carrito[producto].cantidad--;
      carrito.total -= carrito[producto].precio; 
      if (carrito[producto].cantidad === 0) {
        delete carrito[producto];
      }
      actualizarCarrito();
    }
  }
  
  function actualizarCarrito() {
    const itemsCarrito = document.getElementById('itemsCarrito');
    itemsCarrito.innerHTML = '';
  
    Object.keys(carrito).forEach(producto => {
      if (producto !== 'total') {
        const div = document.createElement('div');
        div.innerHTML = `${producto} - Cantidad: ${carrito[producto].cantidad} - Precio: ${carrito[producto].precio} <button onclick="quitarDelCarrito('${producto}')">Quitar uno</button>`;
        itemsCarrito.appendChild(div);
      }
    });
  
    const divTotal = document.createElement('div');
    divTotal.innerHTML = `Total del carrito: ${carrito.total}`;
    itemsCarrito.appendChild(divTotal);
  }
  