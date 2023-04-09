//Declaración de variables iniciales.
let nombre, contraseña

//Declaración por si se cancela la acción.
let cancelar = true

//Variables para los datos validados.
let nombreOK, contraseñaOK

//Declaración de las variables/premisas para las contraseñas.
let minusculas = false
let mayusculas = false
let numeros = false
let simbolos = false

//String para la inicialización de letras y números, y asi nos detecte posteriormente las premisas.
const min = "aáàbcçdeèéfghiíìjklmnñoóòpqrstuúùvwxyz"
const num = "0123456789"

//Validación del nombre de usuario.
do {
    nombre = prompt("Escribe tu nombre de usuario")
    if (nombre == null) {
        cancelar = false
    }
    if (cancelar) {
        //Si hay texto, lo validamos.
        nombreOK = true
        let i = 0
        while (nombreOK && i < nombre.length) {
            let caracter = nombre.charAt(i)
            //Validar la minúscula.
            if (min.indexOf(caracter) == -1) {
                //No se encontró una minúscula de la lista (string).
                nombreOK = false
                alert("El usuario introducido es incorrecto \n" +
                    "Sólo se admiten minúsculas")
            }
            i++
        }
    }
//Si el nombre no es válido, se le pedira al usuario reiteradamente que introduzca el nombre bien (solo en minúsculas).
} while (cancelar == true && nombreOK == false)

//Contraseña
if (cancelar) {
    //Pedimos al usuario la contraseña que quiere escribir.
    do {
        let minusculas = false
        let mayusculas = false
        let numeros = false
        let simbolos = false
        contraseña = prompt("Escribe tu contraseña")
        if(contraseña == null){
            cancelar = false
        }
        if(cancelar){          
            //Validación de contraseña.
            contraseñaOK = true
            let i = 0
            while(contraseñaOK && i < contraseña.length){
                let caracter = contraseña.charAt(i)
                //Validar si hay minúscula.
                if(min.indexOf(caracter) != -1){
                    minusculas = true
                }
                //Validar si hay mayúscula.
                else if (min.toUpperCase().indexOf(caracter) != -1){
                    mayusculas = true
                }
                //Validar si hay número.
                else if(num.indexOf(caracter) != -1){
                    numeros = true
                }
                //Validar si hay otros simbolos.
                else {
                    //Son de otro tipo.
                    simbolos = true
                }
                i++
            }
            //Contraseña ok si todas las premisas == true.
            contraseñaOK = (
                minusculas == true && mayusculas == true && numeros ==true && simbolos == true
            )
            //Si la contraseña no cumple con todas las premisas, volvemos a iniciar el bucle.
            if(contraseñaOK == false){
                alert("La contraseña es icorrecta \n" +
                "Debe tener minúsculas, mayúsculas, "+
                " números y otros símbolos")
            }
        }
    } while (cancelar == true && contraseñaOK == false)
}

//Mensajes tras las verificaciones.
if(cancelar == true){
    document.write("<span>Datos almacenados</span>")
} else {
    document.write("<p>Operación cancelada</p>")
}