var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){
        console.log("Realizaron 2 clic");
        this.remove();
    });
});