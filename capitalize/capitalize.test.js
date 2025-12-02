const capitalize = require("./capitalize.js")

test("input str returned with first char capital", () => {
    expect(capitalize("brandon")).toBe("Brandon")
})

test("only first char is changed", () => {
    expect(capitalize("only FIRST char CHANGED")).toBe("Only FIRST char CHANGED")
})

test("input length must be greater than 1", () => {
    expect(capitalize("")).toBe("")
})

test("only accepts input of type string", () => {
    expect(() => capitalize(3)).toThrow(Error)
})