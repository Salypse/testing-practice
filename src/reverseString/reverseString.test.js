const reverseString = require("./reverseString.js")

test("reverse string", () => {
    expect(reverseString("Brandon")).toBe("nodnarB")
})

test("reverse string with mulltiple spaces", () => {
    expect(reverseString("123 456 7890")).toBe("0987 654 321")
})

test("invalid input type", () => {
    expect(() => reverseString(123)).toThrow(Error)
})