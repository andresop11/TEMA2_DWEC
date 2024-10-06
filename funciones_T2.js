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

//RELACION 4

function invierteCadena(cad_arg) {
    return cad_arg.split('').reverse().join('');
}

function inviertePalabras(cad_arg) {
    return cad_arg.split(' ').reverse().join(' ');
}

function encuentraPalabraMasLarga(cad_arg) {
    const palabras = cad_arg.split(' ');
    let longitudMaxima = 0;
    palabras.forEach(palabra => {
        if (palabra.length > longitudMaxima) {
            longitudMaxima = palabra.length;
        }
    });
    return longitudMaxima;
}

function filtraPalabrasMasLargas(cad_arg, i) {
    const palabras = cad_arg.split(' ');
    return palabras.filter(palabra => palabra.length > i).length;
}

function cadenaBienFormada(cad_arg) {
    return cad_arg.charAt(0).toUpperCase() + cad_arg.slice(1).toLowerCase();
}


function determinarCadenas(cadena) {

    if (cadena === cadena.toLowerCase()) {

        return ("La cadena esta formada por todo minúsculas");

    } else if (cadena === cadena.toUpperCase()) {

        return ("La cadena está formada por todo mayúsculas");
    } else {

        return ("La cadena la forman mayúsculas y minúsculas");
    }

}

function localizarSubcadena(cadena, subcadena) {
    const posiciones = [];
    let posicion = cadena.indexOf(subcadena);

    while (posicion !== -1) {
        posiciones.push(posicion); // Almacena la posición encontrada
        posicion = cadena.indexOf(subcadena, posicion + 1);
    }

    return posiciones;
}

function consonantesVocales(cadena) {


    const vocales = 'aeiouAEIOU';
    let consonantes = '';
    let soloVocales = '';

    // Recorremos cada letra de la cadena
    for (let letra of cadena) {
        if (letra === ' ') {
            continue; // Saltamos los espacios
        }
        if (vocales.includes(letra)) {
            soloVocales += letra; // Si es vocal, la añadimos a soloVocales
        } else {
            consonantes += letra; // Si no es vocal (es consonante), la añadimos a consonantes
        }
    }

    // Devolvemos las consonantes primero y luego las vocales
    return consonantes + soloVocales;

}


function eliminarRepetidos(cadena) {
    let resultado = '';
    
    // Recorremos cada letra de la cadena
    for (let letra of cadena) {
        // Si la letra no está ya en la cadena resultado, la añadimos
        if (!resultado.includes(letra)) {
            resultado += letra;
        }
    }
    
    return resultado;
}

function esSubcadena(cadena1, cadena2) {
    // Utilizamos el método indexOf para buscar la subcadena
    let posicion = cadena1.indexOf(cadena2);
    
    // Si indexOf devuelve -1, significa que no encontró la subcadena
    if (posicion !== -1) {
        return `La cadena "${cadena2}" es una subcadena de "${cadena1}" y aparece por primera vez en la posición ${posicion}.`;
    } else {
        return `La cadena "${cadena2}" no es una subcadena de "${cadena1}".`;
    }
}

function esPalindromo(cadena) {
    // Convertimos la cadena a minúsculas
    cadena = cadena.toLowerCase();

    // Eliminamos espacios y caracteres especiales, quedándonos solo con letras y números
    let cadenaLimpia = '';
    for (let letra of cadena) {
        if (letra >= 'a' && letra <= 'z' || letra >= '0' && letra <= '9') {
            cadenaLimpia += letra;
        }
    }

    // Comparamos la cadena limpia con su versión invertida
    let cadenaInvertida = '';
    for (let i = cadenaLimpia.length - 1; i >= 0; i--) {
        cadenaInvertida += cadenaLimpia[i];
    }

    // Verificamos si la cadena limpia es igual a su inversa
    if (cadenaLimpia === cadenaInvertida) {
        return "Es un palíndromo";
    } else {
        return "No es un palíndromo";
    }
}

function contarPalabras(cadena) {
    // Eliminamos los espacios al principio y al final
    cadena = cadena.trim();
    
    // Si la cadena está vacía, devolvemos 0
    if (cadena === "") {
        return 0;
    }
    
    // Dividimos la cadena en palabras usando un solo espacio como separador
    let palabras = cadena.split(" ");
    
    // Filtramos los espacios vacíos que puedan quedar entre palabras
    let palabrasValidas = [];
    for (let palabra of palabras) {
        if (palabra !== "") {
            palabrasValidas.push(palabra);
        }
    }
    
    // Devolvemos el número de palabras válidas
    return palabrasValidas.length;
}

function validarCreditCard(numero) {
    // Verificar que el número tenga exactamente 16 caracteres
    if (numero.length !== 16) {
        return false;
    }

    // Verificar que todos los caracteres sean dígitos 
    if (isNaN(numero)) {
        return false;
    }

    // Verificar que haya al menos dos dígitos diferentes
    const primerDigito = numero[0];
    let tieneDiferentes = false;

    for (let i = 1; i < numero.length; i++) {
        if (numero[i] !== primerDigito) {
            tieneDiferentes = true;
            break; // Si ya encontramos un dígito diferente, no necesitamos seguir buscando
        }
    }

    if (!tieneDiferentes) {
        return false;
    }

    // Verificar que el último dígito sea par
    const ultimoDigito = parseInt(numero.charAt(15), 10);
    if (ultimoDigito % 2 !== 0) {
        return false;
    }

    // Calcular la suma de todos los dígitos 
    let suma = 0;
    for (let i = 0; i < numero.length; i++) {
        suma += parseInt(numero[i], 10);
    }

    if (suma <= 16) {
        return false;
    }

    // Si pasa todas las verificaciones, es válido
    return true;
}

function validateCreditCard2(numero) {
     // Eliminar todos los guiones usando replaceAll
     numero = numero.replaceAll('-', '');

    // Verificar que el número tenga exactamente 16 caracteres después de eliminar los guiones
    if (numero.length !== 16) {
        return false;
    }

    // Verificar que todos los caracteres sean dígitos
    if (isNaN(numero)) {
        return false;
    }

    // Verificar que haya al menos dos dígitos diferentes
    const primerDigito = numero[0];
    let tieneDiferentes = false;

    for (let i = 1; i < numero.length; i++) {
        if (numero[i] !== primerDigito) {
            tieneDiferentes = true;
            break; // Si ya encontramos un dígito diferente, no necesitamos seguir buscando
        }
    }

    if (!tieneDiferentes) {
        return false;
    }

    // Verificar que el último dígito sea par
    const ultimoDigito = parseInt(numero.charAt(15), 10);
    if (ultimoDigito % 2 !== 0) {
        return false;
    }

    // Calcular la suma de todos los dígitos de una forma más simple
    let suma = 0;
    for (let i = 0; i < numero.length; i++) {
        suma += parseInt(numero[i], 10);
    }

    if (suma <= 16) {
        return false;
    }

    // Si pasa todas las verificaciones, es válido
    return true;
}
