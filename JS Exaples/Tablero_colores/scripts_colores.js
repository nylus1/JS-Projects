//Declaración de las constantes: el contenedor declarado en html, los colores a usar para rellenar, y el numero de cuadrados.
const contenedor = document.getElementById('contenedor')
const colores = ['#DAF7A6', '#FFC300', '#FF5733', '#C70039', '#900C3F','#581845']
const cuadros = 550

//Bucle donde creamos los cuadrados y declaramos el efecto de color a sin-color.
for(let i = 0; i < cuadros; i++){
    const cuadro = document.createElement('div')
    cuadro.classList.add('cuadro')
    cuadro.addEventListener('mouseover', ()=> color(cuadro))
    cuadro.addEventListener('mouseout', ()=> sinColor(cuadro))
    contenedor.appendChild(cuadro)
}

//Función definir el color del cuadro.
function color(elemento){
    const color = colorAleatorio()
    elemento.style.background = color
}

//Función para declarar el color "sin-color".
function sinColor(elemento){
    elemento.style.background = '#1d1d1d'
}

//Función para generar el color aleatorio a mostrar.
function colorAleatorio(){
    return colores[Math.floor(Math.random() * colores.length)]
}