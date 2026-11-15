/*
 * ============================================================
 *  EJERCICIO 13 · Patrón de diseño: Factory Method
 *  Referencia: diapositiva 53 · Nivel: Ampliación
 * ============================================================
 *
 * ENUNCIADO
 *
 * FACTORY METHOD: encapsula la creación; quien llama no necesita saber cómo se
 * construye el resultado, solo pide un tipo.
 *
 * 1) crearOperacion(tipo) DEVUELVE una función:
 *      - "doble"    -> multiplica por 2.
 *      - "cuadrado" -> multiplica el número por sí mismo.
 *      - "mitad"    -> divide entre 2.
 *      - cualquier otro tipo -> devuelve el número sin cambios.
 * 2) crearSaludador(idioma) DEVUELVE una función que recibe un nombre y devuelve
 *    el saludo:
 *      "es" -> "Hola, <nombre>"       "en" -> "Hello, <nombre>"
 *      "fr" -> "Bonjour, <nombre>"    otro -> "Hi, <nombre>"
 * 3) Muestra por consola, en este orden:
 *      crearOperacion("doble")(5)      crearOperacion("cuadrado")(6)
 *      crearOperacion("mitad")(9)      crearOperacion("raro")(7)
 *      crearSaludador("fr")("Ana")
 *
 * RESULTADO ESPERADO en la Salida:
 *     10
 *     36
 *     4.5
 *     7
 *     Bonjour, Ana
 *
 * Escribe tu código debajo, guarda el fichero y recarga la página
 * del ejercicio en el navegador para ver la Salida y las comprobaciones.
 */

// ===== TU CÓDIGO =====
function crearOperacion(tipo) {
  if (tipo === "doble") {
    return function (n) { return n * 2; };
  } else if (tipo === "cuadrado") {
    return function (n) { return n * n; };
  } else if (tipo === "mitad") {
    return function (n) { return n / 2; };
  } else {
    return function (n) { return n; };
  }
}

function crearSaludador(idioma) {
  if (idioma === "es") {
    return function (nombre) { return "Hola, " + nombre; };
  } else if (idioma === "en") {
    return function (nombre) { return "Hello, " + nombre; };
  } else if (idioma === "fr") {
    return function (nombre) { return "Bonjour, " + nombre; };
  } else {
    return function (nombre) { return "Hi, " + nombre; };
  }
}

console.log(crearOperacion("doble")(5));
console.log(crearOperacion("cuadrado")(6));
console.log(crearOperacion("mitad")(9));
console.log(crearOperacion("raro")(7));
console.log(crearSaludador("fr")("Ana"));