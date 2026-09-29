const formulario = document.getElementById("formularioLogin");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    const mensaje = document.getElementById("mensaje");

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (!usuario) {
        mensaje.textContent = "No hay ningún usuario registrado.";
        return;
    }

    if (correo === usuario.correo && contrasena === usuario.contrasena) {
    window.location.href = "inicio.html";
    } else {
        mensaje.textContent = "Correo o contraseña incorrectos.";
    }
});