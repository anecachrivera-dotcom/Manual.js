/* script.js - animaciones de inicio + funciones de los temas */

/* ----- Helper: escribir texto (typed effect) ----- */
function typeText(element, text, speed = 40, callback) {
  if (!element) return;
  element.textContent = "";
  let i = 0;
  function step() {
    if (i <= text.length) {
      element.textContent = text.slice(0, i);
      i++;
      setTimeout(step, speed);
    } else {
      if (typeof callback === "function") callback();
    }
  }
  step();
}

/* ----- Al cargar la página mostramos la tarjeta y ejecutamos el typed ----- */
document.addEventListener("DOMContentLoaded", function () {
  // animar tarjeta
  const card = document.getElementById("welcomeCard");
  setTimeout(() => { if (card) card.classList.add("show"); }, 150);

  // typed text (puedes cambiar el texto aquí)
  const welcomeEl = document.getElementById("welcomeText");
  const mensaje = "Explora 10 temas de JavaScript con ejemplos interactivos. Pulsa 'Empezar' o elige un tema para ver la explicación y ejecutar código en la página.";
  // espera un poco y escribe
  setTimeout(() => typeText(welcomeEl, mensaje, 24), 420);

  // pequeño efecto: destacar el primer botón después de escribir
  // (si existe)
  setTimeout(() => {
    const firstBtn = document.querySelector(".big-btn");
    if (firstBtn) {
      firstBtn.animate([{ transform: "translateY(0)" }, { transform: "translateY(-6px)" }, { transform: "translateY(0)" }], { duration: 600, easing: "ease-out" });
    }
  }, 1600);
});

/* ----- Funciones para los ejemplos (usadas por las páginas temaX) ----- */
/* Todas usan id="out1" en cada página de tema para mostrar la salida */

function mostrarConFadeEl(el, texto) {
  if (!el) { alert("Contenedor de salida no encontrado (id=out1)."); return; }
  el.style.opacity = 0;
  el.innerText = texto;
  el.style.transition = "opacity .28s ease";
  requestAnimationFrame(() => { el.style.opacity = 1; });
}

function ejemplo1() {
  const out = document.getElementById("out1");
  mostrarConFadeEl(out, "JavaScript es un lenguaje que permite crear páginas interactivas. Se ejecuta en el navegador y puede cambiar HTML/CSS dinámicamente.");
}
function ejemplo2() {
  const out = document.getElementById("out1");
  const obj = { nombre: "Anelyan", edad: 18 };
  mostrarConFadeEl(out,
    "Tipos de datos:\nNúmero: 42\nCadena: 'Hola'\nBooleano: true\nNull: null\nUndefined: undefined\nArray: [1,2,3]\nObjeto: " + JSON.stringify(obj));
}
function ejemplo3() {
  const out = document.getElementById("out1");
  let a = 8, b = 3;
  mostrarConFadeEl(out, `Operadores:\na=${a}, b=${b}\nSuma: ${a+b}\nResta: ${a-b}\nMultiplicación: ${a*b}\nDivisión: ${a/b}`);
}
function ejemplo4() {
  const out = document.getElementById("out1");
  mostrarConFadeEl(out, `+ con distinta semántica:\n5 + 5 = ${5+5}\n"5" + 5 = ${"5"+5}\n+"5" = ${+ "5"}`);
}
function ejemplo5() {
  const out = document.getElementById("out1");
  mostrarConFadeEl(out, `Conversiones:\nString(123) => "${String(123)}"\nNumber("456") => ${Number("456")}\nBoolean("") => ${Boolean("")}`);
}
function ejemplo6() {
  const out = document.getElementById("out1");
  var x = "var: función/global";
  let y = "let: bloque";
  const z = "const: constante";
  mostrarConFadeEl(out, `Variables:\nvar x -> ${x}\nlet y -> ${y}\nconst z -> ${z}`);
}
function ejemplo7() {
  const out = document.getElementById("out1");
  let nombre = prompt("¿Cómo te llamas?");
  if (!nombre) mostrarConFadeEl(out, "No ingresaste nombre.");
  else mostrarConFadeEl(out, `¡Hola, ${nombre}! Este es un ejemplo de entrada/salida.`);
}
function ejemplo8() {
  const out = document.getElementById("out1");
  let pares = [];
  for (let i = 1; i <= 12; i++) if (i % 2 === 0) pares.push(i);
  mostrarConFadeEl(out, `Estructuras de control:\nPares del 1 al 12: ${pares.join(", ")}`);
}
function ejemplo9() {
  const out = document.getElementById("out1");
  function suma(a,b) { return a + b; }
  mostrarConFadeEl(out, `Funciones:\nEjemplo: suma(4,5) = ${suma(4,5)}\nLas funciones ayudan a reutilizar código.`);
}
function ejemplo10() {
  const out = document.getElementById("out1");
  const persona = { nombre: "Anelyan", edad: 18, saludar() { return `Hola, soy ${this.nombre} (${this.edad} años)`; } };
  mostrarConFadeEl(out, "Objeto ejemplo:\n" + JSON.stringify(persona) + "\nMétodo saludar(): " + persona.saludar());
}

/* buscador demo (si alguna página lo tiene) */
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btnSearch");
  if (btn) {
    btn.addEventListener("click", function () {
      const q = document.getElementById("q").value.trim();
      if (!q) alert("Escribe algo para buscar.");
      else alert("Buscar: " + q + " (demo)");
    });
  }
});

