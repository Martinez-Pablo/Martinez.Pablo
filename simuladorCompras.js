function comprarProductos () {
    let producto = ""
    let precio = 0
    let cantidad = 0
    let totalCompra = 0
    let seguirComprando = "false"


    do {
        producto = prompt("Desea comprar milanesa, hamburguesa, lomo, matambre, chacarero?", "escriba aqui una opcion")
        cantidad = parseInt(prompt("Cuantas unidades desea?"))
        
        let cantidadValidada = validarCantidad (cantidad)
        
        switch (producto) {
            case "milanesa":
                precio = 800
                break;
            case "hamburguesa":
                precio = 800
                break
            case "lomo":
                precio = 100
                break
            case "matambre":
                precio = 1100
                break
            case "chacarero":
                precio = 1500
                break
            default:
                alert("Seleccione algun producto")
                precio = 0 
                cantidad = 0
                break
        }
    
        totalCompra += precio * cantidadValidada 
        
    
        seguirComprando = confirm("Queres agregar otro producto?")
    
    
    } while (seguirComprando)
    
    return totalCompra
}

function validarCantidad (cantidad) {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad != 0){
            alert("ingrese un numero")
        } else {
            alert("ingrese un numero distinto de cero")
        }
        cantidad = Number(prompt("Cuantas unidades desea?"))
    }
    return cantidad 
}


function aplicarDescuento (totalCompra) {
    let cupon = prompt("posee algun cupon de descuento?","ingreselo aqui")
    if (cupon === "BROS") {
        alert("CUPON VALIDADO! Tenes un 15% de desuento en tu compra!")
        return totalCompra * 0.85
    } else {
        alert("cupon no valido")
        return totalCompra 
    }
}

function calcularEnvio (totalCompra) {
    const costoDeEnvio = 200 
    let tieneEnvioADomiciolio = confirm("Queres envio a domicilio? ")
    if (tieneEnvioADomiciolio && totalCompra >= 2500){
        alert("Tenes envio gratis. El total de la compra es: $"+totalCompra)
    } else if (tieneEnvioADomiciolio && totalCompra < 2500 && totalCompra !== 0){
        totalCompra += costoDeEnvio
        alert("El envio cuesta $200. El total de la compra es: $"+ totalCompra)

    } else {
        alert("El total de la compra es: $" + totalCompra)
    }
}


calcularEnvio(aplicarDescuento(comprarProductos()))



