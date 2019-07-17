const fs = require('fs')
const papa = require('papaparse')
export class CSVOperations {

    public static readCSV(row: number, headervalue: string,csvFile: string = './TestData/TestData.csv') {
        var file = fs.readFileSync(csvFile, 'utf8')
        var results = papa.parse(file, {
            header: true
            
        })
        return results
    }
    public static readCSVDelimeter(row: number, headervalue: string,delimiterValue:string,csvFile: string = './TestData/TestData.csv') {
        var file = fs.readFileSync(csvFile, 'utf8')
        var results = papa.parse(file, {
            header: true,
            delimiter:delimiterValue
            
        })
        return results
    }
    public static readCSVValue(row: number, headervalue: string,csvFile: string = './TestData/TestData.csv') {
        var file = fs.readFileSync(csvFile, 'utf8')
        var results = papa.parse(file, {
            header: true
            
        })
        return results.data[row][headervalue]
    }
    public static readCSVValueDelimeter(row: number, headervalue: string,delimiterValue:string,csvFile: string = './TestData/TestData.csv') {
        var file = fs.readFileSync(csvFile, 'utf8')
        var results = papa.parse(file, {
            header: true,
            delimiter:delimiterValue
            
        })
        return results.data[row][headervalue]
    }
}