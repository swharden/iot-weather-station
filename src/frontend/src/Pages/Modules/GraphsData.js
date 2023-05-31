



function GraphData() {

    return (
        <div>

            < div class="my-5" >
                <canvas id="myChart" class="w-100">


                </canvas>
                <div />

                <div class="my-5">
                    <h3>Indoor</h3>
                    <canvas id="indoorChart" class="w-100"></canvas>
                </div>


                <div class="my-5">
                    <h3>Outdoor</h3>
                    <canvas id="outdoorChart" class="w-100"></canvas>
                </div>

                <div class="my-5">
                    <h3>Attic</h3>
                    <canvas id="atticChart" class="w-100"></canvas>
                </div>

                <div class="my-5">
                    <h3>Pressure</h3>
                    <canvas id="pressureChart" class="w-100"></canvas>
                </div>
            </div>
        </div>
    )
}



export default GraphData