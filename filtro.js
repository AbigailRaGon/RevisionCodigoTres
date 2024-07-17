// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.getElementById("lista-de-productos"); //No era name era ID
const $i = document.getElementById("input"); // Cambiamos el selector universal por algo mas especifico

function displayProductos (productos) {
  for (let i = 0; i < productos.length; i++) {
    const div = document.createElement("div"); //Es mejor utilizar const que var
    div.classList.add("producto"); //nombre de la variable mas descriptiva d -> div

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productos[i].nombre;
    
    const imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    div.appendChild(ti);
    div.appendChild(imagen);

    li.appendChild(div);
  }
}

displayProductos (productos); // hicimos la funcion para esta llamada en linea 14 


const botonDeFiltro = document.getElementById("button");
botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  displayProductos(productosFiltrados); 
  //aqui llamamos a la funcion en donde reciclamos los datos para filtrar y reescribir de nuevo el codigo

/*
  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }*/
}

function filtrado (productos = [], texto) {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  

