import { Workbook } from 'exceljs'
const wb: Workbook = new Workbook()
export class ExcelOperations {

    public static readExcel(sheetName: string, rowNumber: number, cellNumber: number, excelFile: string = './TestData/TestData.xlsx') {
        return wb.xlsx.readFile(excelFile).then(function () {
            return wb.getWorksheet(sheetName).getRow(rowNumber).getCell(cellNumber).value.toString()
        })
    }
}