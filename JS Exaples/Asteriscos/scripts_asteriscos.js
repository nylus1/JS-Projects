//Creamos la array con 20 numeros.
const TAM = 20

//Declaración de la array.
let a = []

//Bucle para asignar valores aleatorios entre 1 y 50.
for(let i = 0; i < TAM; i++){
    a[i] = parseInt((Math.random()*50)+1)
    
    //Sustituimos los numeros por un *.
    for(let j = 0; j < a[i] ; j++){
        document.write("*")
    }
    document.write("<br>")
}

//console.log(a)