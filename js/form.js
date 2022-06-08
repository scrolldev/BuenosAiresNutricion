botonAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");

    var paciente = capturarDatosPaciente(form);

    var tabla = document.querySelector("#tabla-pacientes");

    //Creacion de Tds y Tr
    pacienteTr = document.createElement("tr");
    nombreTd = document.createElement("td");
    pesoTd = document.createElement("td");
    alturaTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");

    //Asignar los valores a la propiedad textContent 
    nombreTd.textContent = paciente.nombre;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    //Asignar al tr de los td, y la tabla de tr    
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    tabla.appendChild(pacienteTr);
});

function capturarDatosPaciente(form){
    //Capturando datos del usuario
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value,form.altura.value)
    }
    
    return paciente;
}