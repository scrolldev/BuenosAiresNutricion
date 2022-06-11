var campoFiltro = document.querySelector("#filtrar-tabla");
console.log(campoFiltro);

campoFiltro.addEventListener("input",function(){
    console.log("Escribieron en el input");
    console.log(this.value);

    var pacientes = document.querySelectorAll(".paciente");
    

    for(var i = 0; i < pacientes.length; i++){
        var paciente = pacientes[i];
        var tdNombre = paciente.querySelector(".info-nombre");
        var nombre = tdNombre.textContent;
        console.log(nombre);
    }
});