document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".articulo").forEach(fruta =>{
  
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?fruta.classList.remove("filtro")
              :fruta.classList.add("filtro")
        })
  
    }
  
  
  })

/*
  document.getElementById("buscador").addEventListener("submit", function(e){
    e.preventDefault(); // prevenir el envío por defecto del formulario
    
    // obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var miLista = document.getElementById("miLista").value;
    var fecha = document.getElementById("fecha").value;
    var aceptar = document.getElementById("aceptar");
    var formulario = document.getElementById("myForm");
    
   
    
    
    // hacer algo con los valores, como mostrarlos en la consola o enviarlos a un servidor
    console.log("Nombre: " + nombre);
    console.log("Email: " + email);
    console.log("Mensaje: " + mensaje);
    console.log("Genero: " + miLista);
    console.log("Fecha: " + fecha);
    console.log("Aceptar: " + aceptar);
  });
  */