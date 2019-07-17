"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
class PropertyFileOperations {
    static getProperty(key) {
        var rawContent = fs.readFileSync('./PropertyFile/data.properties');
        var fullContent = rawContent.toString();
        var propertyMap = {};
        var allPairs = fullContent.split("\n");
        for (var i = 0; i < allPairs.length; i++) {
            var keyValue = allPairs[i].split("=");
            propertyMap[keyValue[0]] = keyValue[1];
        }
        return propertyMap[key];
    }
}
exports.PropertyFileOperations = PropertyFileOperations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHlGaWxlT3BlcmF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1V0aWxpdHkvUHJvcGVydHlGaWxlT3BlcmF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN4QixNQUFhLHNCQUFzQjtJQUV4QixNQUFNLENBQUMsV0FBVyxDQUFDLEdBQVc7UUFDakMsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO1FBQ2xFLElBQUksV0FBVyxHQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUN2QyxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUE7UUFDcEIsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3JDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDekM7UUFDRCxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUUzQixDQUFDO0NBQ0o7QUFkRCx3REFjQyJ9