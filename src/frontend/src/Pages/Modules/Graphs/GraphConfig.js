

function Graphs() {

    return (function tickLabel(epoch) {
        var date = new Date(parseInt(epoch) * 1000);
        // added var
        const hourNumber = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        const hour = String(hourNumber);
        const minute = String(date.getMinutes()).padStart(2, '0');
        const ampm = date.getHours() > 12 ? "pm" : "am";
        return hour + ":" + minute + " " + ampm;
    }

    function updateChart2(chartID, dates, values, axisLabel, borderColor = "#36A2EB") {
        const data = {
            labels: dates,
            datasets: [
                {
                    label: 'Indoor',
                    data: values,
                    borderColor: borderColor,
                    fill: false,
                    tension: 0.1,
                }
            ]
        };

        const config = {
            type: 'line',
            data: data,
            options: {
                responsive: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                elements: {
                    point: {
                        radius: 0
                    }
                },
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: axisLabel
                        }
                    }
                },
            }
        };

        new Chart(document.getElementById(chartID), config);
    })
}
