//Declaración de variables inicial.
const N_REPETICIONES = 10000

//Declaración del mapa.
let mapa = new Map()

for(let i = 1; i <= 10; i++){
    mapa.set(i,0)
}

//10000 cálculos de número aleatorio.
for(let i = 1; i <= N_REPETICIONES; i++){
    let num = parseInt((Math.random()*100)+1)
    let frecActual = mapa.get(num)
    mapa.set(num, frecActual+1)
}

// Mostramos los resultados.
document.write("<h1>Frecuencias</h1>")
document.write("<ul>")

for(let i =1; i <= 10; i++){
    document.write(
        `<li> Número ${i}: `+
        `${mapa.get(i)} </li>`
    )
}

document.write("</ul>")