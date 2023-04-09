//Función para sacar la secuencia de Fibonacci.
function fibonacci(n){
    if(n==0) return 0
    else if(n==1) return 1
    else return fibonacci(n-1) + fibonacci(n-2)
}

//Pedimos al usuario que introduzca el numero entero.
let num = prompt("Introduce numero entero.")

//Escribimos en pantalla el valor de la secuencia.
document.write(`El valor ${num} de la secuencia de Fibonacci es ${fibonacci(num)}.`)
