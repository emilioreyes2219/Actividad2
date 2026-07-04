document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("btnCalcular");
    const modal = document.getElementById("modal");
    const resultado = document.getElementById("resultadoEdad");
    const cerrar = document.getElementById("cerrar");

    boton.addEventListener("click", () => {

        const fecha = document.getElementById("fechaNacimiento").value;

        if (fecha === "") {
            alert("Seleccione una fecha.");
            return;
        }

        const edad = calcularEdad(fecha);

        resultado.textContent = "Tu edad es: " + edad + " años";
        modal.style.display = "flex";

    });

    cerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

});