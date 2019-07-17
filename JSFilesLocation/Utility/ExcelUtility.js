"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceljs_1 = require("exceljs");
const wb = new exceljs_1.Workbook();
class ExcelOperations {
    static readExcel(sheetName, rowNumber, cellNumber, excelFile = './TestData/TestData.xlsx') {
        return wb.xlsx.readFile(excelFile).then(function () {
            return wb.getWorksheet(sheetName).getRow(rowNumber).getCell(cellNumber).value.toString();
        });
    }
}
exports.ExcelOperations = ExcelOperations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhjZWxVdGlsaXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVXRpbGl0eS9FeGNlbFV0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBa0M7QUFDbEMsTUFBTSxFQUFFLEdBQWEsSUFBSSxrQkFBUSxFQUFFLENBQUE7QUFDbkMsTUFBYSxlQUFlO0lBRWpCLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBaUIsRUFBRSxTQUFpQixFQUFFLFVBQWtCLEVBQUUsWUFBb0IsMEJBQTBCO1FBQzVILE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3BDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUM1RixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSjtBQVBELDBDQU9DIn0=