const fs = require('fs')

// const book = {
//     title : 'Ego is Enenmy',
//     author: 'Ryan Renolds'
// }

// const JsonData = JSON.stringify(book)
// console.log(JsonData)

// const ParseData = JSON.parse(JsonData)
// console.log(ParseData.author)

// fs.writeFileSync('1-json.json',JsonData)

// const readj = fs.readFileSync('1-json.json')
// const AJsonD = readj.toString()
// console.log(AJsonD)

const DataBuffer = fs.readFileSync('1-json.json')
const JsonData = DataBuffer.toString()
const ParseData = JSON.parse(JsonData)

ParseData.name = 'Ajay'
ParseData.age = '31'

const NJsonData = JSON.stringify(ParseData)
fs.writeFileSync('1-json.json',NJsonData)