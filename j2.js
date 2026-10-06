function saludo(){
    let name1 = document.getElementById("nom").value;
    let ap1 = document.getElementById("ape").value;
    
    document.getElementById("mensaje").textContent = "Hola, " + name1 + " " + ap1 + " Buenas tardes";
}

function calculodenota(){
    let name1 = document.getElementById("nom").value;
    let ap1 = document.getElementById("ape").value;

    let teorica = parseFloat(document.getElementById("teorica").value) || 0;
    let practica = parseFloat(document.getElementById("practica").value) || 0;

    // Validación de límites
    if(teorica < 0 || teorica > 30) {
        document.getElementById("mensajeNota").textContent = "La nota teórica debe estar entre 0 y 30.";
        return;
    }

    if(practica < 0 || practica > 70) {
        document.getElementById("mensajeNota").textContent = "La nota práctica debe estar entre 0 y 70.";
        return;
    }

    let notaFinal = teorica + practica;
    
    // Muestra el promedio con nombre y apellido
    document.getElementById("mensajeNota").textContent = "El promedio de " + ap1 + " " + name1 + " es " + notaFinal;
}
