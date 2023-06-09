

import Arrow from './Arrows/index.js'

import Modwhite from '../Modwhite.js'

function MiniData({ texts }) {
    return (
        <Modwhite content={
            <div>

                {
                    texts.map((item) => (
                        <div key={item.title}>
                            <h2 className='mdTitle'>{item.title}</h2>
                            <div className='mdRow'>
                                <hr className='vr'></hr>
                                <h1 style={{ color: item.color }} className='mdData'>{item.data}</h1>

                                <Arrow text={item} />
                                <h1 className='mdData'>{item.diff}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        } />
    );
}

export default MiniData;