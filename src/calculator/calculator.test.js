const calculator = require("./calculator.js")

test("basic operations", () => {
    expect(calculator.add(1,2)).toBe(3)
    expect(calculator.subtract(5,3)).toBe(2)
    expect(calculator.multiply(4,5)).toBe(20)
    expect(calculator.divide(10,5)).toBe(2)
})

test("invalid input types", () => {
    expect(() => calculator.add(true, false)).toThrow(Error)
    expect(() => calculator.subtract("1", 2)).toThrow(Error)
    expect(() => calculator.multiply(2, "1")).toThrow(Error)
})