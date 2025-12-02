function reverseString(str) {
    if (typeof str !== "string") throw new Error("Input must be of type string")

    return str.split("").reverse().join("")
}

module.exports = reverseString