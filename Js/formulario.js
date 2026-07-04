document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const fecha = document.getElementById("fechaNacimiento").value;
        const numero = document.getElementById("numero").value;
        const textoLibre = document.getElementById("textoLibre").value;
        const numeroPar = document.getElementById("numeroPar").value;

        if (!soloLetras(nombre)) {
            alert("Nombre inválido");
            return;
        }

        if (!esMayorDeEdad(fecha)) {
            alert("Debes ser mayor de edad");
            return;
        }

        if (!validarLongitud(numero, 5)) {
            alert("Número demasiado largo");
            return;
        }

        alert("Texto formateado: " + formatearTexto(textoLibre));
        alert("Número par: " + esNumeroPar(numeroPar));

        alert("Formulario enviado correctamente.");
    });
});