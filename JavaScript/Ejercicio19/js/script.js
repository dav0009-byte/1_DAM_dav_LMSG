function adduser() {

    var usuario = document.getElementById("username");
    var contrasenia = document.getElementById("password");
    var confirmarContrasenia = document.getElementById("confirmPassword");

    if(usuario.value == "" || contrasenia.value =="" || confirmarContrasenia.value == ""){

        alert("Falta algun dato");

    } else if (contrasenia.value != confirmarContrasenia.value) {

        contrasenia.style.backgroundColor = "red";
        confirmarContrasenia.style.backgroundColor = "red";
        
        contrasenia.value = "Las contraseñas no coinciden";
        confirmarContrasenia.value = "Las contraseñas no coinciden";

        contrasenia.type = "text";
        confirmarContrasenia.type = "text";

    } else { 

        var userinfo = document.getElementById("registeredUsers");
        var parrafo = document.createElement("p");

        parrafo.innerHTML = "Usuario: " + usuario.value + "// Contraseña : " + contrasenia.value;
        userinfo.appendChild(parrafo);

        document.getElementById("username").value="";
        document.getElementById("password").value="";
        document.getElementById("confirmPassword").value="";


    }

}