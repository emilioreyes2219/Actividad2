document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const correo = document.getElementById("correo").value;
        const password = document.getElementById("password").value;

        if (!validarCorreo(correo)) {
            alert("Correo inválido");
            return;
        }

        if (!validarPassword(password)) {
            alert("Password inválido");
            return;
        }

        alert("Login correcto");
    });

});