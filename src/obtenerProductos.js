const obtenerProductos = async () => {
    try {
        const resp = await fetch("../src/stock.json");
        const data = await resp.json();
        
        return data;
    } catch (error) {
        console.log('Hubo un error: ' + error)
    };
};

const mostrarProductos = async () => {
    const contenedorProductos = document.getElementById("producto-contenedor");
  
    contenedorProductos.innerHTML= "";
    const data = await obtenerProductos();
    data.forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML += `<div class="card-image">
                          <img src=${producto.img}>
                          <span class="card-title">${producto.nombre}</span>                      
                        </div>
                        <div class="card-content">
                            <p>${producto.desc}</p>
                            <p>$${producto.precio}</p>
                            <a class="btn-floating halfway-fab wabes-effect waves-light red" id=boton${producto.id}><i class="material-icons">add_shopping_cart</i>Comprar</a>
  
                        </div>
                       `
      contenedorProductos.appendChild(div);
  
      const boton = document.getElementById(`boton${producto.id}`);
      boton.addEventListener("click", () => {
        validarProductoRepetido(producto.id);
      });
    });
  };
  
