"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
class JsonOperations {
    static readJson(file = './TestData/TestData.json') {
        let rawdata = fs.readFileSync(file);
        let data = JSON.parse(rawdata);
        return data;
    }
    static writeJson(jsonObject, file = './TestData/TestData.json') {
        let data = JSON.stringify(jsonObject, null, 3);
        fs.writeFileSync(file, data);
    }
}
exports.JsonOperations = JsonOperations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSnNvblV0aWxpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9VdGlsaXR5L0pzb25VdGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxFQUFFLEdBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3ZCLE1BQWEsY0FBYztJQUVoQixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQWEsMEJBQTBCO1FBRTFELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFDTSxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQWMsRUFBQyxPQUFhLDBCQUEwQjtRQUM1RSxJQUFJLElBQUksR0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDM0MsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDaEMsQ0FBQztDQUNKO0FBWkQsd0NBWUMifQ==