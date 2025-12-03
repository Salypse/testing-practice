const calculator = {
    add: function(x, y) {
        if (this.isValidInputs(x, y)) {
            return x + y
        }
    },
    subtract: function(x, y) {
        if (this.isValidInputs(x,y)) {
            return x - y
        }
    },
    multiply: function(x, y) {
        if (this.isValidInputs(x,y)) {
            return x * y
        }
    },
    divide: function(x, y) {
        if (this.isValidInputs(x,y)) {
            return x / y
        }
    },

    isValidInputs(num1, num2) {
        if (typeof num1 !== "number" || typeof num2 !== "number") {
            throw new Error("Inputs must both be of type number")
        }
        return true
    }
}

module.exports = calculator