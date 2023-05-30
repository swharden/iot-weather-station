

import Arrow from './Arrow'


function MiniData(title, color, data, diff) {
    return (
        <div>
            <h2>{title}</h2>
            <div>
                <h1 style={{ color: color }}>{data}</h1>
                <Arrow />
                <h1>{diff}</h1>
            </div>
        </div>
    )
}
export default MiniData;