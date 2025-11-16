const inputMonto = document.querySelector("#input_monto");
const selectorMoneda = document.querySelector("#selector");
const botonBuscar = document.querySelector("button");
const resultadoSpan = document.querySelector("#id_resultado");

const apiUrl = "https://mindicador.cl/api";


botonBuscar.addEventListener("click", async () => {
    const montoClp = parseFloat(inputMonto.value);
    const monedaSeleccionada = selectorMoneda.value;

    
    if (isNaN(montoClp) || montoClp <= 0) {
        alert("Por favor, ingrese un monto válido en CLP.");
        return;
    }

    try {
        
        const res = await fetch(`${apiUrl}/${monedaSeleccionada}`)
        
        
        if (!res.ok) { 
            throw new Error(`Error ${res.status}: No se pudo obtener la información.`);
        }

        const data = await res.json();

        
        const valorDeCambio = data.serie[0].valor;

        
        const resultadoConversion = montoClp / valorDeCambio;

        
        resultadoSpan.innerHTML = `Resultado: $${resultadoConversion.toFixed(2)}`;

        
        renderizarGrafico(data.serie);

    } catch (error) {
        
        console.error("Error al consultar la API:", error);
        // Mostramos el mensaje de error en el DOM
        resultadoSpan.innerHTML = `Error: ${error.message}`;
    }
});


async function getAndRenderInitialChart() {
    const res = await fetch(`${apiUrl}/dolar`);
    const data = await res.json();
    renderizarGrafico(data.serie);
}
getAndRenderInitialChart(); 
