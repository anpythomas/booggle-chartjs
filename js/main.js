const dateArray = ['7/7/2022', '8/2022', '10/8/2022', '11/7/2022', '12/6/2022', '1/5/2023', '2/42023']
const pricesArray = [122, 119, 131, 153, 121, 138, 129]

const chart = (dates, prices) => {

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'line',
        data: {
        labels: dates,
        datasets: [{
            label: 'Weller 12',
            data: prices,
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

chart(dateArray, pricesArray)