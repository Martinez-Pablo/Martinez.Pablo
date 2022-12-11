const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito')
const btnComprar = document.getElementById('btn-comprar');
const btnVaciar = document.getElementById('btn-vaciar-carrito');

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

modalCarrito.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('boton-eliminar')) {
        Swal.fire({
            title: '¿Esta seguro?',
            text: 'Va a eliminar el producto',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarProductoCarrito(e.target.value);
                Swal.fire(
                    'Eliminado',
                    'El producto ha sido eliminado',
                    'success'
                )
            }
        })
    }
});

btnComprar.addEventListener('click', () => {
    if (carrito.length !=0){
    Swal.fire({
        title: 'Usted será derivado a "metodos de pagos"',
        confirmButtonColor: '#4242afea'
    })
} else {
    Swal.fire({
        title: 'Primero agregue algún producto al carrito',
        icon: 'info'
    })};
})


modalCarrito.addEventListener("click", (e) => {
    e.stopPropagation();
    if (carrito.length != 0) {
    if (e.target.classList.contains('vaciar')) {
        Swal.fire({
            title: '¿Esta seguro?',
            text: 'Va a eliminar todos los productos',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                carrito.length = 0;
                actualizarTotalesCarrito(carrito);
                pintarCarrito();
                Swal.fire(
                    'Eliminado',
                    'Los productos fueron eliminados',
                    'success'
                )
            }
        })
    }
} else {
    btnVaciar.addEventListener('click', () => {
    Swal.fire({
       title: 'No hay productos en el carrito',
       icon: 'error'
    
})
})
}
});