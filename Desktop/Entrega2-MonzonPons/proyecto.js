// Array de destinos y precios
const destinos = [
{ nombre: "Barcelona", precio: 1200, actividades: ["Sagrada Familia", "Las Ramblas", "Playa"] },
{ nombre: "Roma", precio: 1000, actividades: ["Coliseo", "Vaticano", "Paseo en Vespa"] },
{ nombre: "Tokio", precio: 2000, actividades: ["Monte Fuji", "Templos", "Sushi tradicional"] },
{ nombre: "Nueva York", precio: 1500, actividades: ["Estatua de la Libertad", "Central Park", "Musical Broadway"] },
{ nombre: "París", precio: 1300, actividades: ["Torre Eiffel", "Museo Louvre", "Montmartre"] },
{ nombre: "Londres", precio: 1400, actividades: ["Big Ben", "London Eye", "Museo Británico"] },
{ nombre: "Dubai", precio: 1800, actividades: ["Burj Khalifa", "Safari en el desierto", "Dubai Mall"] },
{ nombre: "Sydney", precio: 2200, actividades: ["Ópera de Sydney", "Bondi Beach", "Harbour Bridge"] }
];

// Llenar dropdown de destinos
const selectDestino = document.getElementById("destino-select");
destinos.forEach((d, i) => {
const option = document.createElement("option");
option.value = i;
option.textContent = `${d.nombre} - $${d.precio}`;
selectDestino.appendChild(option);
});

// Capturar elementos
const inputDias = document.getElementById("dias-input");
const inputPresupuesto = document.getElementById("presupuesto-input");
const btnCalcular = document.getElementById("calcular-btn");
const divResultado = document.getElementById("resultado");

// Función para calcular costo total
function calcularCosto(dias, precioPorDia) {
  return dias * precioPorDia;
}

// Función para mostrar resultado
function mostrarResultado() {
const indice = selectDestino.value;
const dias = parseInt(inputDias.value);
const presupuesto = parseFloat(inputPresupuesto.value);

if (indice === "" || isNaN(dias) || dias <= 0 || isNaN(presupuesto) || presupuesto <= 0) {
    divResultado.innerHTML = "<p style='color:red;'>Por favor completá todos los campos correctamente.</p>";
    return;
}

const destino = destinos[indice];
const costoTotal = calcularCosto(dias, destino.precio);

let mensaje = `<h3>Resultado:</h3>`;
mensaje += `<p>Destino elegido: <strong>${destino.nombre}</strong></p>`;
mensaje += `<p>Días de viaje: <strong>${dias}</strong></p>`;
mensaje += `<p>Presupuesto disponible: <strong>$${presupuesto}</strong></p>`;
mensaje += `<p>Costo total estimado: <strong>$${costoTotal}</strong></p>`;

if (presupuesto >= costoTotal) {
    mensaje += `<p style="color:green;">¡Tu presupuesto es suficiente! ¡Buen viaje! 🎉</p>`;
} else {
    mensaje += `<p style="color:red;">Tu presupuesto es insuficiente.</p>`;
    mensaje += `<p>Actividades recomendadas para este destino:</p><ul>`;
    destino.actividades.forEach(act => {
    mensaje += `<li>${act}</li>`;
    });
    mensaje += `</ul>`;
    }

divResultado.innerHTML = mensaje;
}

// Evento del botón
btnCalcular.addEventListener("click", mostrarResultado);
