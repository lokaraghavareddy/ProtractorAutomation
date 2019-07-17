"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const papa = require('papaparse');
class CSVOperations {
    static readCSV(row, headervalue, csvFile = './TestData/TestData.csv') {
        var file = fs.readFileSync(csvFile, 'utf8');
        var results = papa.parse(file, {
            header: true
        });
        return results;
    }
    static readCSVDelimeter(row, headervalue, delimiterValue, csvFile = './TestData/TestData.csv') {
        var file = fs.readFileSync(csvFile, 'utf8');
        var results = papa.parse(file, {
            header: true,
            delimiter: delimiterValue
        });
        return results;
    }
    static readCSVValue(row, headervalue, csvFile = './TestData/TestData.csv') {
        var file = fs.readFileSync(csvFile, 'utf8');
        var results = papa.parse(file, {
            header: true
        });
        return results.data[row][headervalue];
    }
    static readCSVValueDelimeter(row, headervalue, delimiterValue, csvFile = './TestData/TestData.csv') {
        var file = fs.readFileSync(csvFile, 'utf8');
        var results = papa.parse(file, {
            header: true,
            delimiter: delimiterValue
        });
        return results.data[row][headervalue];
    }
}
exports.CSVOperations = CSVOperations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ1NWVXRpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1V0aWxpdHkvQ1NWVXRpbGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN4QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDakMsTUFBYSxhQUFhO0lBRWYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFXLEVBQUUsV0FBbUIsRUFBQyxVQUFrQix5QkFBeUI7UUFDOUYsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDM0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDM0IsTUFBTSxFQUFFLElBQUk7U0FFZixDQUFDLENBQUE7UUFDRixPQUFPLE9BQU8sQ0FBQTtJQUNsQixDQUFDO0lBQ00sTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQVcsRUFBRSxXQUFtQixFQUFDLGNBQXFCLEVBQUMsVUFBa0IseUJBQXlCO1FBQzdILElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQzNDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQzNCLE1BQU0sRUFBRSxJQUFJO1lBQ1osU0FBUyxFQUFDLGNBQWM7U0FFM0IsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxPQUFPLENBQUE7SUFDbEIsQ0FBQztJQUNNLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBVyxFQUFFLFdBQW1CLEVBQUMsVUFBa0IseUJBQXlCO1FBQ25HLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQzNDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQzNCLE1BQU0sRUFBRSxJQUFJO1NBRWYsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFDTSxNQUFNLENBQUMscUJBQXFCLENBQUMsR0FBVyxFQUFFLFdBQW1CLEVBQUMsY0FBcUIsRUFBQyxVQUFrQix5QkFBeUI7UUFDbEksSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDM0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDM0IsTUFBTSxFQUFFLElBQUk7WUFDWixTQUFTLEVBQUMsY0FBYztTQUUzQixDQUFDLENBQUE7UUFDRixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDekMsQ0FBQztDQUNKO0FBcENELHNDQW9DQyJ9