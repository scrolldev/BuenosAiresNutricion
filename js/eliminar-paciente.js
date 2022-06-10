var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick",function(event){
    event.target.parentNode.remove();
});

