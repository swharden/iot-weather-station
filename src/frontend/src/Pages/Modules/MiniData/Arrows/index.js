



function Arrow({ text }) {
    if (text.type === 'right') {
        if (text.value === true) {
            return './Arrows/GreenUp.png'
        } else {
            return './Arrows/RedDown.png'
        }
    } else if (text.value === true) {
        return './Arrows/GreenDown.png', alt = 'a green arrow going down'
    } else {
        return './Arrows/RedUp.png'
    }

}


export default Arrow