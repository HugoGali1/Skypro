document.addEventListener('DOMContentLoaded', () => {
    const botonesComprar = document.querySelectorAll('.btn-comprar');

    botonesComprar.forEach(boton => {
        boton.addEventListener('click', () => {
            const product = boton.getAttribute('data-product');
            const price = boton.getAttribute('data-price');
            localStorage.setItem('productoSeleccionado', JSON.stringify({ product, price }));
            window.location.href = 'pago.html';
        });
    });
});