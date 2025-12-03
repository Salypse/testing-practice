const analyzeArray = require("./analyzeArray.js")

test("inputed array returns object with array data", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })

    expect(analyzeArray([3,6,5,2,7,7,55,1,3,4])).toEqual({
        average: 9.3,
        min: 1,
        max: 55,
        length: 10
    })
})

test("Doesnt except invalid input", () => {
    expect(() => analyzeArray("this is an array")).toThrow(Error)
    expect(analyzeArray([])).toEqual(null)
})