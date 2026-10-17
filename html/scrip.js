const salida = document.getElementById("salida");

// 1. click sobre el encabezado
document.querySelector("header").addEventListener("click", () => {
  salida.textContent = "Hiciste clic en el encabezado";
});

// 2. mouseover sobre la foto
document.querySelector(".foto img").addEventListener("mouseover", () => {
  salida.textContent = "El mouse pasó sobre la foto";
});

// 3. mouseout sobre el contenido
document.querySelector("main").addEventListener("mouseout", () => {
  salida.textContent = "El mouse salió del contenido";
});

// 4. keyup en el campo de texto
document.getElementById("campo-texto").addEventListener("keyup", (e) => {
  salida.textContent = "Tecla presionada: " + e.key;
});

// 5. dblclick en el botón
document.getElementById("boton-prueba").addEventListener("dblclick", () => {
  salida.textContent = "Hiciste doble clic en el botón";
});

// 6. change en el select: cambia el color del encabezado
document.getElementById("color-select").addEventListener("change", (e) => {
  document.querySelector("header").style.backgroundColor = e.target.value;
  salida.textContent = "Color del encabezado cambiado";
});

// 7. change en el checkbox: resalta el contenido
document.getElementById("check-contenido").addEventListener("change", (e) => {
  document.querySelector("main").classList.toggle("resaltado", e.target.checked);
  salida.textContent = e.target.checked
    ? "Contenido resaltado"
    : "Resaltado quitado";
});

// 8. drag and drop entre dos cajas
const caja = document.getElementById("caja-arrastrable");
const zona = document.getElementById("zona-soltar");

caja.addEventListener("dragstart", () => {
  salida.textContent = "Comenzaste a arrastrar la caja";
});

zona.addEventListener("dragover", (e) => {
  e.preventDefault(); // necesario para permitir el drop
  zona.classList.add("sobre-zona");
});

zona.addEventListener("dragleave", () => {
  zona.classList.remove("sobre-zona");
});

zona.addEventListener("drop", (e) => {
  e.preventDefault();
  zona.classList.remove("sobre-zona");
  zona.appendChild(caja);
  salida.textContent = "Soltaste la caja en la zona";
});

// 9. contextmenu: clic derecho sobre un botón
document.getElementById("boton-clic-derecho").addEventListener("contextmenu", (e) => {
  e.preventDefault(); // evita que aparezca el menú del navegador
  salida.textContent = "Abriste el menú contextual (clic derecho)";
});

// 10. focus en el campo de texto
document.getElementById("campo-texto").addEventListener("focus", () => {
  salida.textContent = "El campo de texto obtuvo el foco";
});