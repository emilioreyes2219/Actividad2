document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formulario");
    const modal = document.getElementById("modal");
    const cerrar = document.getElementById("cerrar");
    const resultado = document.getElementById("resultadoEdad");

    formulario.addEventListener("submit", function(e){

        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const fecha = document.getElementById("fechaNacimiento").value;
        const numero = document.getElementById("numero").value;
        const texto = document.getElementById("textoLibre").value;
        const numeroPar = document.getElementById("numeroPar").value;

        if(!soloLetras(nombre)){
            alert("Nombre inválido");
            return;
        }

        if(!validarLongitud(numero,5)){
            alert("El número supera los 5 dígitos.");
            return;
        }

        const edad = calcularEdad(fecha);

        resultado.innerHTML =
            "Tu edad es <b>" + edad + " años</b><br><br>" +
            "Texto formateado: " + formatearTexto(texto) + "<br>" +
            "¿El número es par?: " + esNumeroPar(numeroPar);

        modal.style.display="flex";

    });

    cerrar.onclick=function(){
        modal.style.display="none";
    }

    window.onclick=function(e){
        if(e.target==modal){
            modal.style.display="none";
        }
    }

});
