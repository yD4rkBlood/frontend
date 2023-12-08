var data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],

    datasets: [{
        label: 'Vendas 2021',
        backgroundColor: 'rgba(0, 255, 10, 0.5)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
        data: [3, 6, 9, 7, 6, 3]
    },
    {
        label: 'Vendas 2022',
        backgroundColor: 'rgba(255, 255, 25, 0.5)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
        data: [6, 8, 12, 5, 10, 8]
    },
    {
        label: 'Vendas 2023',
        backgroundColor: 'rgba(0, 50, 150, 0.5)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 1,
        data: [15, 10, 9, 12, 12, 8]
    }
]
};

var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

var ctx = document.querySelector('#grafico').getContext('2d');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});