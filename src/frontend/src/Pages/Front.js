

import Modwhite from './Modules/Modwhite.js'
import MiniData from './Modules/MiniData/MiniData.js'

// import background from '.public/photos/background.jpg';

import Sidebar from './Sidebar';


//Graphs

import AllGraph from './Modules/Graphs/AllGraph.js'



//hard coded data

const AC = [
    {
        title: 'AC temp:',
        color: '#237490',
        data: 76.13,
        diff: '+10',
        type: 'right',
        value: true
    }
];

const Attic = [
    {
        title: 'AC temp:',
        color: '#237490',
        data: 81.34,
        diff: '-5',
        type: 'right',
        value: true
    }
];



function Front() {


    return (
        <div className='Frontdiv'>
            {/* <img src={background} alt="A soft blue,white and purple gradient" /> */}

            <Sidebar />

            <div className="bigGrid Montserrat">

                <h2 className="title">Weather Station:</h2>

                <AllGraph />
                <MiniData texts={AC} />
                <MiniData texts={Attic} />
                <div>
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