//Esta función es simplemente para cambiar la imagen con el menu desplegable, se usa un getElementById y se iguala el valor a la ruta de la imagen.
function changeImage(value) {
    var image = document.getElementById("img");
    image.src = value;
}

//Con esta función hacemos que dandole al boton de descripción, se nos abra un textbox en blanco donde poder escribir.
function openBox() {
    var textbox = document.getElementById("description");
    if (textbox.style.display === "none") {
        textbox.style.display = "block";
    } else {
        textbox.style.display = "none";
        textbox.style.textAlign = "center"
    }
}

//Esta función captura el valor introducido en el input field del serial, crea el patrón con las reglas y crea las variables para mostrar el mensaje
//de error y modificar los colores y bordes de los recuadros. Si al pasar el valor introducido por el pattern es correcto, nos muestra todo en verde 
//y el mensaje positivo, sino en rojo y el mensaje negativo.
function checkSerial() {
    var input = document.getElementById("serial").value;
    var pattern = /^\d{3}[A-Z]{4}[1-2A]$/;
    var error = document.getElementById("error");
    var inputborder = document.getElementById("serial");
    var textbox = document.getElementById("description");
    if (pattern.test(input)) {
        error.innerHTML = "Número de serie correcto, informe enviado.";
        error.style.color = "green";
        inputborder.style.border = "2px solid green";
        textbox.style.border = "2px solid green";
    } else {
        error.innerHTML = "Número de serie incorrecto.";
        error.style.color = "red";
        inputborder.style.border = "2px solid red";
        textbox.style.border = "2px solid red";
    }
}

//Esta función hace que al escribir de nuevo en el input fiel de serial, los bordes y el mensaje de error se reseteen y vuelvan a estar en blanco.
function removeError() {
    var error = document.getElementById("error");
    var inputborder = document.getElementById("serial");
    var textbox = document.getElementById("description");
    error.innerHTML = "";
    inputborder.style.border = "";
    textbox.style.border = "";
}



