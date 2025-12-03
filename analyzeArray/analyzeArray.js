function analyzeArray(arr) {
    if (!Array.isArray(arr)) throw new Error("Input must be of type array")
    if (arr.length <= 0) return null

    function average() {
        let total = 0

        for (let num of arr) {
            total += num
        }
        return total / arr.length
    }

    function minValue() {
        let min = arr[0]

        for (let num of arr) {
            if (num < min) min = num
        }
        return min
    }

    function maxValue() {
        let max = arr[0]

        for (let num of arr) {
            if (num > max) max = num
        }
        return max
    }

    return {
        "average": average(),
        "min": minValue(),
        "max": maxValue(),
        "length": arr.length 
    }
}

module.exports = analyzeArray