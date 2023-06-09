import Greenup from "./GreenUp.png"



function Arrow({ text }) {
    if (text.type === 'right') {
        if (text.value === true) {
            return <img src={Greenup} className="arrow" alt='a green arrow going up' />
        } else {
            return <img src='./Arrows/RedDown.png' className="arrow" alt='a red arrow going down' />
        }
    } else if (text.value === true) {
        return <img src='./Arrows/GreenDown.png' className="arrow" alt='a green arrow going down' />
    } else {
        return <img src='./Arrows/RedUp.png' className="arrow" alt='a red arrow going up' />
    }

}


export default Arrow