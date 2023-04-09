//Pedimos al usuario que introduzca el texto y clave.
let texto = prompt("Introduce el texto a cifrar.")
let clave = prompt("Introduce el ROT para cifrar tu texto (Números)")

let i = 0 //Índice propio para la clave.

//Añadimos un texto estatico para que no muestre simplemente la clave.
document.write("Su texto cifrado es: ")

//Bucle donde se cifra el texto segun la clave que metamos (bucle que itera a traves del objeto iterable (texto)).
for(let letra of texto){
    let cifra = letra.charCodeAt(letra) + Number(clave.charAt(i))
    document.write(String.fromCharCode(cifra))
    i++
    if(i == clave.length){
        i=0
    }
}



