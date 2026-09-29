const formulario = document.getElementById("formularioRegistro");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    const confirmarContrasena = document.getElementById("confirmarContrasena").value;
    const mensaje = document.getElementById("mensaje");

    if (contrasena !== confirmarContrasena) {
        mensaje.textContent = "Las contraseñas no coinciden.";
        return;
    }

    const usuario = {
        nombre: nombre,
        correo: correo,
        contrasena: contrasena
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    mensaje.textContent = "¡Registro realizado correctamente!";

    formulario.reset();
});