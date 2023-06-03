

import Arrow from './Arrows/index.js'



function MiniData({ texts }) {
    return (
        <div>
            {texts.map((item) => (
                <div key={item.title}>
                    <h2>{item.title}Attic</h2>
                    <div>
                        <h1 style={{ color: item.color }}>{item.data}</h1>

                        <Arrow text={item} />
                        <h1>{item.diff}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MiniData;