

import miniData from './Modules/MiniData/MiniData.js'

import Modwhite from './Modules/Modwhite.js'

// import background from '.public/photos/background.jpg';

function Front() {
    return (
        <div>
            {/* <img src={background} alt="A soft blue,white and purple gradient" /> */}
            <div className="bigGrid Montserrat">

                <h2 className="title">Weather Station:</h2>
                <div>
                    <Modwhite content={miniData} />
                </div>
                <h2 className="title">Inside:</h2>
                <div>

                </div>
                <h2 className="title">Outside:</h2>
                <div>

                </div>
                <h2 className="title">Pressure:</h2>
                <div>

                </div>

            </div>
        </div >

    )
}
export default Front;