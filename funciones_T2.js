//RELACION 1


function difNavidad() {
    const hoy = new Date();
    const vacaciones = new Date(hoy.getFullYear(), 11, 19);
    const dias = vacaciones - hoy;
    const total = Math.ceil(dias / (1000 * 60 * 60 * 24));
    return total;
}






function cumpleDomingos(fechaCumpleaños) {

    // Convertir la fecha de cumpleaños en Date
    let fecha = new Date(fechaCumpleaños);

    // Obtener el mes y el día de la fecha de cumpleaños
    let mes = fecha.getMonth(); // enero es 0, diciembre es 11
    let dia = fecha.getDate();


    for (let year = fecha.getFullYear(); year <= 2100; year++) {

        // Crear una nueva fecha para cada año en el mismo mes y día
        let fechaAnual = new Date(year, mes, dia);

        // Verificar si el día de la semana es domingo (0: domingo)
        if (fechaAnual.getDay() === 0) {
            console.log(`El cumpleaños cae en domingo en el año: ` + year);
        }
    }
}


function mayorde3() {

    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    let num3 = parseFloat(prompt("Ingresa el tercer número:"));

    // Variable para almacenar el mayor
    let mayor;

    // Comparamos los números para encontrar el mayor
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }

    // Mostramos el resultado
    console.log("El número mayor es: " + mayor);
}

function contarA() {
    let frase = prompt("Introduceme una frase");
    let contador = 0;

    for (let i = 0; i <= frase.length; i++) {

        if (frase[i] === "a") {
            contador = contador + 1;
        }
    }

    console.log("La letra A aparece en la frase un total de " + contador + " veces");
}


function contarVocales(cadena) {

    const vocal = "aeiouAEIOU";
    let contador = 0;


    for (let i = 0; i <= cadena.length; i++) {

        if (vocal.includes(cadena[i])) {
            //el .includes lo usamos para comparar los caracteres si coinciden con vocales o no
            contador++;
        }
    }
    return contador;
}

//RELACION 2















//RELACION 3
function getRandom() {
    return Math.random();
}

function getRandom100200() {

    return Math.random() * (200 - 100) + 100;
}

function getRandomMinMax(min, max) {

    return Math.random() * (max - min) + min;
}


function getSeno(angulo) {

    return Math.sin(angulo);
}

function getCoseno(angulo) {
    return Math.cos(angulo);
}

function getTangente(angulo) {
    return Math.tan(angulo);
}


function getHipotenusa(cat1, cat2) {
    //Math.pow te hace el cuadrado del numero que quieras(tambien puede ser cubo o mas) y Math.sqrt te hace 
    //la raiz cuadrada
    return Math.sqrt(Math.pow(cat1, 2) + Math.pow(cat2, 2));
}

function getSegundoGradoMas(a, b, c) {

   // Calculamos el discriminante (ES UNA PARTE DE LA FORMULA Y LA SEPARAMOS PARA CALCULARLA A PARTE)
    let discriminante = b * b - 4 * a * c;
    
    // Comprobamos si el discriminante es negativo, cero o positivo
    if (discriminante < 0) {
        return "La ecuación no tiene soluciones reales";
    } else if (discriminante === 0) {
        // Si el discriminante es cero, hay una solución única
        let x = -b / (2 * a);
        return `La solución es única: x = ${x}`;
    } else {
        // Si el discriminante es positivo, hay dos soluciones
        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return `Las soluciones son: x1 = ${x1}, x2 = ${x2}`;
    }
}


function calcularPotencias(base,exponente){

    return Math.pow(base,exponente); 
}

function generarTablaSeno() {
    for (let i = 1; i <= 10; i++) { // Puedes ajustar el rango según necesites
        // Crear una nueva fila
        const fila = document.createElement('tr');
        
        // Crear la celda para el número
        const celdaNumero = document.createElement('td');
        celdaNumero.textContent = i;
        
        // Crear la celda para el valor del seno
        const celdaSeno = document.createElement('td');
        const valorSeno = Math.sin(i).toFixed(2); // Calcular el seno y redondear a 2 decimales
        celdaSeno.textContent = valorSeno;

        // Añadir las celdas a la fila
        fila.appendChild(celdaNumero);
        fila.appendChild(celdaSeno);

        // Añadir la fila al cuerpo de la tabla
        cuerpoTabla.appendChild(fila);
    }
}
