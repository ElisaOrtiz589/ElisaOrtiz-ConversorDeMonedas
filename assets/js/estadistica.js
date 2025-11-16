let myChart = null;

function renderizarGrafico(serie) {
    const ctx = document.getElementById('myChart').getContext('2d');

    
    const ultimos10dias = serie.slice(0, 10).reverse();

    
    const labels = ultimos10dias.map(item => {
        
        const fecha = new Date(item.fecha);
        return `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
    });
    const data = ultimos10dias.map(item => item.valor);

    
    if (myChart) {
        myChart.destroy();
    }

    
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Historial últimos 10 días',
                data: data,
                backgroundColor: 'rgba(255, 165, 0, 0.2)', // Naranja con transparencia
                borderColor: 'rgba(255, 165, 0, 1)', // Naranja opaco
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}