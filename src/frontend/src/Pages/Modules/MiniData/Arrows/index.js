



function Arrow({ text }) {
    if (text.type === 'right') {
        if (text.value === true) {
            return <img src='./Arrows/GreenUp.png' alt='a green arrow going up' />
        } else {
            return <img src='./Arrows/RedDown.png' alt='a red arrow going down' />
        }
    } else if (text.value === true) {
        return <img src='./Arrows/GreenDown.png' alt='a green arrow going down' />
    } else {
        return <img src='./Arrows/RedUp.png' alt='a red arrow going up' />
    }

}


export default Arrow