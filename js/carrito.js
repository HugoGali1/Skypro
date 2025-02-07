document.addEventListener('DOMContentLoaded', () => {
    const botonesCarrito = document.querySelectorAll('.btn-carrito');
    const carritoItems = document.querySelector('.carrito-items');
    const totalAmount = document.querySelector('.total-amount');
    const btnVaciarCarrito = document.querySelector('.btn-vaciar-carrito');
    const btnFinalizarCompra = document.querySelector('.btn-finalizar-compra');

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const actualizarCarrito = () => {
        carritoItems.innerHTML = '';
        let total = 0;
        carrito.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.product} - $${item.price}`;
            carritoItems.appendChild(li);
            total += parseFloat(item.price);
        });
        totalAmount.textContent = total.toFixed(2);
        localStorage.setItem('carrito', JSON.stringify(carrito));
    };

    botonesCarrito.forEach(boton => {
        boton.addEventListener('click', () => {
            const product = boton.getAttribute('data-product');
            const price = boton.getAttribute('data-price');
            carrito.push({ product, price });
            actualizarCarrito();
            alert(`${product} ha sido añadido al carrito.`);
        });
    });

    if (btnVaciarCarrito) {
        btnVaciarCarrito.addEventListener('click', () => {
            carrito = [];
            actualizarCarrito();
        });
    }

    if (btnFinalizarCompra) {
        btnFinalizarCompra.addEventListener('click', () => {
            alert('Compra finalizada. Gracias por su compra.');
            carrito = [];
            actualizarCarrito();
        });
    }

    actualizarCarrito();
});