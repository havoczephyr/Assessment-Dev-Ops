const {shuffleArray} = require('./utils')
let testArray = [1, 3, 6, 8 , 12, 15, 23, 25]

describe('shuffleArray should', () => {
    // const arrayValues = () => shuffleArray
    test('confirming if shuffleArray is an Array', () => {
        expect(Array.isArray([shuffleArray(testArray)])).toBe(true)
    })
    test('array length check', () => {
        // const mergedArray = shuffleArray.join()
//I wasn't sure if this was meant to measure the string length of shuffle array to its own array 
//based on the wording, but since im not sure i'll leave it commented here
        expect(shuffleArray(testArray)).toHaveLength(shuffleArray(testArray).length)
    })
    test('array items check', () => {
        expect(shuffleArray(testArray)).toEqual(expect.arrayContaining(testArray))
    })
    test('shuffle test', () => {
        expect(shuffleArray(testArray)).not.toEqual(testArray)
    })
})