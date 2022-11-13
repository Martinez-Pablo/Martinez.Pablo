//Clase constructora 

class Producto {
    constructor (id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = Number(precio);
    }
}

// Array de productos 

const arrayProductos = [];

const producto1 = new Producto(1, 'milanesa', 800);
const producto2 = new Producto(2, 'hamburguesa', 800);
const producto3 = new Producto(3, 'lomito', 1000);
const producto4 = new Producto(4, 'matambre', 1100);
const producto5 = new Producto(5, 'chacarero', 1500);

//Con el comando push introducimos los objetos creados al array 

arrayProductos.push(producto1, producto2, producto3, producto4, producto5);

//Ordenamos la lista de menor a mayor dependiendo del id

const ordenarMenorMayor = () => {
    arrayProductos.sort((a, b) => a.id - b.id);
    mostrarListaOrdenada();
};

//Ordena de mayor a menor segun el id 

const ordenarMayorMenor = () => {
    arrayProductos.sort((a, b) => b.id - a.id);
    mostrarListaOrdenada();
};

//Recorremos el array anterior y creamos uno nuevo mostrando la lista de productos ofrecidos

const mostrarListaOrdenada = () => {
    let array = [];
    arrayProductos.forEach(producto => array.push(producto.nombre+' $'+producto.precio));
    alert('Lista de precios:'+'\n'+array.join('\n'));
};

//Creamos la funcion para mostrar al usuario que producto quiere comprar 

function comprarProductos() {
    let productoNombre = '';
    let productoCantidad = 0;
    let total = 0;
    let seguirComprando = false;

    do {
        productoNombre = prompt('¿Que sandwiche desea comprar?', 'Ej: milanesa, hamburguesa, lomito, matambre, chacarero');
        productoCantidad = parseInt(prompt('¿Cuantos queres comprar?'));

        const producto = arrayProductos.find(producto => producto.nombre === productoNombre);

        if (producto) {
            total += producto.precio * productoCantidad;
        } else {
            alert('El producto no esta disponible.');
        }

        seguirComprando = confirm('¿Queres agregar otro producto?');

    } while (seguirComprando)

    aplicarDescuento(total);
}

function aplicarDescuento(total) {
    if (total >= 3000) {
        total = total * 0.80;
        alert('Tenes un 20% de descuento!');
    }
    calcularEnvio(total)
}

function calcularEnvio(total) {
    let tieneEnvioADomicilio = confirm('Queres envio a domicilio?');

    if (tieneEnvioADomicilio && total >= 2000) {
        alert('Tenes envio gratis. El total de la compra es: '+total);
    } else if (tieneEnvioADomicilio && total < 2000 && total !== 0) {
        total += 200;
        alert('El envío cuesta $200. El total de la compra es: $'+total);
    } else {
        alert('El total de la compra es: $'+total);
    }
};


function comprar() {
    const quieroOrdenar =confirm('¿Querés ordenar la lista de productos ?');
    if (quieroOrdenar) {
        ordenarMenorMayor();
    } else {
        ordenarMayorMenor();
    }

    comprarProductos();
};

comprar();



