function capitalize(str) {
    if (typeof str !== "string") throw new Error("Input must be of type string")
    if (str.length <= 0) return str

    return str.charAt(0).toUpperCase() + str.slice(1)
}

module.exports = capitalize