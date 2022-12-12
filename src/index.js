// document.addEventListener('DOMContentLoaded', () => {
//     mostrarProductos(productos);

//     if (localStorage.getItem("carrito")) {
//         const carrito = obtenerCarritoStorage();
//         pintarCarrito(carrito);
//         actualizarTotalesCarrito(carrito);
//     };
// });

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();

    if (localStorage.getItem("carrito")) {
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito);
        actualizarTotalesCarrito(carrito);
    };
});