import Modwhite from "../Modwhite";



function Graphs() {


    {


        // script add to Html

        function tickLabel(epoch) {
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
        }

        function updateChart(raw) {

            const readings = raw.split("\n").map(x => x.split(",")).filter(x => x.length == 4);

            const indoorReadings = readings.filter(x => x[1] == "2");
            const indoorTemperatures = indoorReadings.map(x => x[2]);
            const indoorDates = indoorReadings.map(x => tickLabel(x[0]));
            document.getElementById("indoor").innerText = indoorTemperatures[indoorTemperatures.length - 1];
            updateChart2("indoorChart", indoorDates, indoorTemperatures, "Temperature (F)", "#36a2eb");

            const outdoorReadings = readings.filter(x => x[1] == "3");
            const outdoorTemperatures = outdoorReadings.map(x => x[2]);
            const outdoorPressures = outdoorReadings.map(x => parseInt(x[3]) / 256 / 6894.76);
            const outdoorDates = outdoorReadings.map(x => tickLabel(x[0]));
            document.getElementById("outdoor").innerText = outdoorTemperatures[outdoorTemperatures.length - 1];
            document.getElementById("pressure").innerText = Math.round(outdoorPressures[outdoorPressures.length - 1] * 1000) / 1000;
            updateChart2("outdoorChart", outdoorDates, outdoorTemperatures, "Temperature (F)", "#ff6384");
            updateChart2("pressureChart", outdoorDates, outdoorPressures, "Pressure (PSI)", "#000000");

            const atticReadings = readings.filter(x => x[1] == "1");
            const atticTemperatures = atticReadings.map(x => x[2]);
            const atticDates = atticReadings.map(x => tickLabel(x[0]));
            document.getElementById("attic").innerText = atticTemperatures[atticTemperatures.length - 1];
            updateChart2("atticChart", atticDates, atticTemperatures, "Temperature (F)", "#ff9f40");


            const data = {
                labels: indoorDates,
                datasets: [
                    {
                        label: 'Indoor',
                        data: indoorTemperatures,
                        fill: false,
                        tension: 0.1,
                    },
                    {
                        label: 'Outdoor',
                        data: outdoorTemperatures,
                        fill: false,
                        tension: 0.1,
                    },
                    {
                        label: 'Attic',
                        data: atticTemperatures,
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
                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    scales: {
                        y: {
                            title: {
                                display: true,
                                text: "Temperature (F)"
                            }
                        }
                    },
                }
            };

            new Chart(document.getElementById("myChart"), config);
        }

        fetch("https://swharden.com/weather/v1/read/", { cache: "no-store" })
            .then(response => response.text())
            .then(data => updateChart(data));
    }

    return (
        <div>

            <Modwhite />

            <canvas id="myChart" class="w-100"></canvas>



            <canvas id="indoorChart" class="w-100"></canvas>





            <canvas id="outdoorChart" class="w-100"></canvas>




            <canvas id="atticChart" class="w-100"></canvas>


            <canvas id="pressureChart" class="w-100"></canvas>

        </div>
    )
}



export default Graphs