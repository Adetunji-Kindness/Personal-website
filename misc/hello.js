// let rows = 5

// console.log('For rows = ' + rows)

// for (let row = 1; i < rows; i++) {
// console.log(row)
// let printValue = ''
// for (let column = 0; column < row; column++) {
// printValue += '*'
// }
// console.log(printValue)
// }

// let originalString = 'this is a string'
// let reversedString = ''

// for (let character of originalString) {
// reversedString = character + reversedString
// }

// console.log(reversedString)

let array = [ 'arrays', 'are', 'iterable' ]
let characterCount = {}

console.log(array)

for (let element of array) {
    console.log(element)
    for (let character of element) {
        console.log(character)
        if (!character in characterCount) {
            characterCount[character] = 1
        } else {
            characterCount[character] += 1
        }
    }
}

console.log(characterCount)
