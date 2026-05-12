function adduser() {

    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPasword");
    var registeredUsers = document.getElementById("registeredUsers")

    var texto = username.value() || password.value() || confirmPassword.value();

    if (texto == "") {

        input.style.backgroundColor ="red";
        alert("El campo no puede estar vacio");

    } else {

        var lista = document.gets.getElementByTagName ("ul")[0];
        var nuevoLi = document.createElement("li");
            nuevoLi.innerHTML = texto;
            lista.appendChild(nuevoLi);
            input.style.backgroundColor = "White";
            input.value = "";

    }

    document.write("Nombre : " + nombre + "// " + "Contraseña : " + contrasenia);

}