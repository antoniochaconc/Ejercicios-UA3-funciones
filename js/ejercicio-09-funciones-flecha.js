/*
 * ============================================================
 *  EJERCICIO 8 · Declaración frente a expresión
 *  Referencia: diapositivas 26 a 30 · Nivel: Medio
 * ============================================================
 *
 * ENUNCIADO
 *
 * En el fichero .js hay un código que FALLA. Fíjate en el error que aparece en
 * la Salida, descubre por qué y arréglalo SIN mover las dos llamadas de sitio
 * (solo cambiando cómo se crea una de las funciones).
 *
 * Después responde con tus palabras, en comentarios (//) dentro del .js:
 *   a) ¿Por qué una de las dos llamadas funciona antes de la definición?
 *   b) ¿Cuándo se crea una declaración de función y cuándo una expresión?
 *
 * RESULTADO ESPERADO en la Salida, ya arreglado:
 *     Hola, Ana
 *     Adiós, Ana
 *
 * Escribe tu código debajo, guarda el fichero y recarga la página
 * del ejercicio en el navegador para ver la Salida y las comprobaciones.
 */

// ===== TU CÓDIGO =====
saludar("Ana");
despedir("Ana");

function saludar(nombre) { console.log("Hola, " + nombre); }
function despedir(nombre) { console.log("Adiós, " + nombre); }

// a) La llamada a saludar() funciona antes de su definición porque es una
// declaración de función (function nombre() {...}), y estas se "elevan"
// (hoisting) completas, con su cuerpo incluido, al principio del ámbito
// antes de que se ejecute ninguna línea de código. Por eso JavaScript ya
// conoce la función entera cuando llega a la llamada.

// b) Una declaración de función (function saludar() {...}) se crea durante
// la fase de compilación/hoisting, antes de ejecutar el código, así que
// está disponible en todo el ámbito desde el principio. Una expresión de
// función asignada a una variable (const despedir = function() {...}) no
// se crea hasta que el intérprete ejecuta esa línea de asignación; antes de
// eso la variable existe (si es let/const, en TDZ) pero no tiene ninguna
// función asociada, por lo que llamarla antes de su definición da error.