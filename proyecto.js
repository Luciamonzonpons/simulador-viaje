// Constantes y arrays
const destinos = ["Brasil", "España", "Chile", "México"];
const costoPorDia = {
    "Brasil": 100,
    "España": 150,
    "Chile": 80,
    "México": 120
};

// Función 1: pedir datos al usuario
function pedirDatosViaje() {
    let destino = prompt("¿A qué destino vas a viajar? opciones: Brasil, España, Chile, México");

    if (!destino) {
        alert("No ingresaste ningún destino.");
        return null;
    }

    destino = destino.charAt(0).toUpperCase() + destino.slice(1).toLowerCase();

    if (!destinos.includes(destino)) {
        alert("Destino no válido. Intenta nuevamente.");
        return null;
    }

    const dias = parseInt(prompt("¿Cuántos días vas a estar?"));
    if (isNaN(dias) || dias <= 0) {
        alert("Cantidad de días inválida.");
        return null;
    }

    const presupuesto = parseFloat(prompt("¿Cuál es tu presupuesto total en dólares?"));
    if (isNaN(presupuesto) || presupuesto <= 0) {
        alert("Presupuesto inválido.");
        return null;
    }

    return { destino, dias, presupuesto };
}

// Función 2: calcular costo estimado del viaje
function calcularCostoTotal(dias, destino) {
    return dias * costoPorDia[destino];
}

// Función 3: mostrar resultado
function mostrarResultado(datos) {
    const costo = calcularCostoTotal(datos.dias, datos.destino);

    let mensaje = `Destino elegido: ${datos.destino}\n`;
    mensaje += `Días de viaje: ${datos.dias}\n`;
    mensaje += `Presupuesto disponible: $${datos.presupuesto}\n`;
    mensaje += `Costo estimado del viaje: $${costo}\n\n`;

    if (datos.presupuesto >= costo) {
        mensaje += "¡Buen viaje! Tu presupuesto es suficiente.";
    } else {
        mensaje += "Tu presupuesto es insuficiente.\n";
        const sugerencia = confirm("¿Querés ver sugerencias para ajustar tu presupuesto?");
        if (sugerencia) {
            mensaje += "\nSugerencias:\n- Reducí la cantidad de días\n- Elegí un destino más económico\n- Aumentá tu presupuesto";
        }
    }

    alert(mensaje);
    console.log(mensaje);
}

// Función principal
function iniciarSimulador() {
    const datos = pedirDatosViaje();
    if (datos) {
        mostrarResultado(datos);
    }
}

// Iniciar simulador
iniciarSimulador();
