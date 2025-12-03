function caesarCipher(str,shift) {
    let newString = ""

    for (let i = 0; i < str.length; i++) {
        if (isAlphabetical(str[i])) {
            const newCharValue = str.charCodeAt(i) + shift
            //If value doesnt go above lowercase or uppercase values
            if (isValidUpperCase(newCharValue) || isValidLowerCase(newCharValue)) {
                newString += String.fromCharCode(newCharValue)
            } else {
                newString += String.fromCharCode(newCharValue - 26)
            }
        }else {
            newString += str[i]
        }
    }

    return newString
}

function isAlphabetical(char) {
    return /[a-zA-Z]/.test(char)
}

function isValidUpperCase(value) {
    return value >= 65 && value <= 90
}

function isValidLowerCase(value) {
    return value >= 97 && value <= 122
}

module.exports = caesarCipher