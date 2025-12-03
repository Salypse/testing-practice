const caesarCipher = require("./caesarCipher.js")

test("cipher the given string", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr")
})

test("cipher doesnt effect non alphabetical characters", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
})

test("correctly loops to start of alphabet if code is greater than z", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc")
})