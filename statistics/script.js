// Bar Chart
new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
        labels: ['2020', '2021', '2022', '2023'],
        datasets: [{
            label: 'Number of Fires',
            data: [120, 150, 180, 210],
            backgroundColor: 'rgba(178,34,34,0.7)'
        }]
    }
});

// Pie Chart
new Chart(document.getElementById('pieChart'), {
    type: 'pie',
    data: {
        labels: ['Building', 'Forest', 'Vehicle', 'Industrial'],
        datasets: [{
            data: [45, 25, 20, 10],
            backgroundColor: [
                '#b22222',
                '#ff8c00',
                '#ffd700',
                '#8b0000'
            ]
        }]
    }
});

// Line Chart
new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: {
        labels: ['2020', '2021', '2022', '2023'],
        datasets: [{
            label: 'Fire Trend',
            data: [120, 150, 180, 210],
            borderColor: '#b22222',
            fill: false
        }]
    }
});
