var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click",function(){
    console.log("Buscar pacientes")
    var xhr = new XMLHttpRequest;
    xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhr.addEventListener("load",function(){
        console.log(xhr.responseText);
    });

    xhr.send();
});