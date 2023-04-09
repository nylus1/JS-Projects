//Pedimos al usuario la frase a verificar.
let texto = prompt("Introduce una frase")

//Sustituimos las vocales con tilde por las mismas sin tilde.
texto = texto.replace(/\s/g,'').toLowerCase()
texto = texto.replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ú", "u")

//Declaración del reverso.
let reverso = texto.split("").reverse().join("")

//Imprimimos por pantalla el resultado en función del mismo.
if(texto == ""){
    document.write("<span>Obviamente es palíndromo, no has escrito nada :)<span>")
}else if (texto === reverso){
    document.write("<span>Tu frase es un palíndromo</span>")
}else {
    document.write("<p>Tu frase no es un palindromo</p>")

}
